// https://cors-anywhere.herokuapp.com/

// Authorization
// Requests to the API must be authorized by adding the following headers:

// X-AYLIEN-TextAPI-Application-Key must be set to your Application Key.
// X-AYLIEN-TextAPI-Application-ID must be set to your Application ID.

/* Function to GET Web API Data*/
const getData = async (url) => {
  const response = await fetch(url);
  try {
    let data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log("error", error);
  }
}
/* Function to POST data */
// const postData = async ( url, data ) => {
//       const response = await fetch(url, {
//       method: 'POST', 
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//           'X-AYLIEN-TextAPI-Application-Key': process.env.API_KEY,
//           'X-AYLIEN-TextAPI-Application-ID': process.env.API_ID
//       },
//      // Body data type must match "Content-Type" header        
//       body: JSON.stringify(data), 
//     });

//       try {
//         const newData = await response.json();
//         return newData;
//       } catch(error) {
//       console.log("error", error);
//       }
//   }

// Check if the user input string is a valid URL
function urlChecker(url) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(url);
}

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field

    let userInput = document.getElementById('name').value
    // if(urlChecker(userInput)){
    //     let url = 'https://api.aylien.com/api/v1/classify?mode=document/url='+ userInput
    // } else {
    //   console.log("Invalid Input")
    // }
    Client.validateRequest(userInput)

    let url = 'https://api.aylien.com/api/v1/classify?mode=document/url='+ userInput
    Client.checkForName(userInput)
    console.log("::: Form Submitted :::")
    getData(url)
    .then(function(data){
        postData('/article', data)
    })

    // textapi.classify({
    //     'url': url }, 
    //         function(error,response) {
    //         if(error===null) {
    //             document.getElementById("results").textContent = response.message
    //             console.log(response)
    //     }
    // })
    // fetch("/class")
    //     .then(function(res) {
    //         return res.json()
    //     })
    //     .then(function(data) {
    //         document.getElementById("results").textContent = data.message
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    
    // const url = `https://api.aylien.com/api/v1/classify/url=${formText}`
    // fetch(url, {
    //     headers: {
    //         'X-AYLIEN-TextAPI-Application-ID': process.env.API_ID, 
    //         'X-AYLIEN-TextAPI-Application-Key': process.env.API_KEY
    //     }
    // })
    //     .then(function(response) {
    //         return response.json()
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //         document.getElementById('results').innerHTML = data.message
    //     })
}

// modules.exports(handleSubmit)
export { handleSubmit }
