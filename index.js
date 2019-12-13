// configurationObject = {
//   // specify the method. By default the method will be GET.
//   method: "POST",
//   // The metadata will be sent to the brower before the data payload.
//   headers: {
//     // "Content-Type" tells the destination server what type of data we're sending
//     // it is also good practice to tell the server what data format we accept in return.
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   },
//   // data goes in the body
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// };

// fetch(destinationURL, configurationObject);

function submitData(name, email) {
  return (
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // send data
    body: JSON.stringify({
      name,
      email
    })
  })
  // handle the response
  .then(function(response) {
    return response.json()
  })
  .then(function(object) {
    document.body.innerHTML = object["id"]
  })
  // handle errors
  .catch(function(error) {
    document.body.innerHTML = error.message
  })
  // return the fetch from line 21
)}