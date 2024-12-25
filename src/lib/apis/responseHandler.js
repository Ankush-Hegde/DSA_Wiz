export function handleResponse(response) {
    if(!response.ok){
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
        } else {
            return {
                "error" : {
                    'description' : 'Something went wrong! It has been reported to our admins.',
                }
            }
        }
    }

    return response.json();
}