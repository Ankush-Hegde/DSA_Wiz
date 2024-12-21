package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type grid struct {
	grid [][]int
}

func getHello(w http.ResponseWriter, r *http.Request) {

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	c := make(map[string]grid)
	_ = json.Unmarshal(body, &c)

	grid := c["grid"]

	print(grid.grid)

	// get the 20 x 20 grid and perform the dfs to find the shortest path

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(body))
}

func main() {

	http.HandleFunc("/find-path", getHello)

	fmt.Println("To close connection CTRL+C :-)")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		print("error serving")
	}
}
