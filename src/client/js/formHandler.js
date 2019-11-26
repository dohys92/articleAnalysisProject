function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let url = document.querySelector('#name').value;
    if(Client.checkUrl(url)) {
        console.log("::: Form Submitted :::");
        console.log("::: Request Info  :::");
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: url })
        })
        .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.text;
        })
    } else{
        console.log("error in handleSubmit()");
        
    } 
}

// modules.exports(handleSubmit)
export { handleSubmit }
