function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let url = document.getElementById('name').value;
    if(Client.checkUrl(url)){
        console.log("::: Form Submitted :::");
        console.log("::: Request Info  :::");
        fetch('/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text:url[0].value})
        })
        .then(res=>res.json())
        .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.text;
        })


    } else{
        console.log("error");
        
    } 
}

// modules.exports(handleSubmit)
export { handleSubmit }
