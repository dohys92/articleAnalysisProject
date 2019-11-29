function handleSubmit(event) {
    event.preventDefault();
    let url = document.querySelector('#name').value;
    console.log(url)
    if(Client.checkUrl(url)) {
        console.log("::: Form Submitted :::");
        console.log("::: Request Info  :::");
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: url })
        })
        .then(function(response) {
            console.log(response)
            document.querySelector('#results').innerHTML = response;
            
        })
    } 
    else {
        console.log("error in handleSubmit()");
        
    } 
}

export { handleSubmit }



