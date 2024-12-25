import React from "react";

import config from "../../config/config"

function Home() {
  return <h1>The .env base url is {config.BASE_URL}</h1>;
}

export default Home;