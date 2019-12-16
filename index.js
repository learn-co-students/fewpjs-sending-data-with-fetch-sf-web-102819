// Add your code here
// document.addEventListener('DOMContentLoaded', (event) => {
    function submitData (name, email) {
    
    let dataForSubmitting = {
        name,
        email
    };
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataForSubmitting)
    };

    return fetch('http://localhost:3000/users', configObj)
    // Call the fetch function passing the url of the API as a parameter
    .then(function(response) {
        return response.json();
    // Your code for handling the data you get from the API
    })
    .then(function(object){
        document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
        document.body.innerHTML = "Unauthorized Access";
//     // This is where you run code if the server returns any errors
    });

    };
// });