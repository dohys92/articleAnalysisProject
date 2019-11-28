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
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: url })
        })
        .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.polarity;
        })
    } 
    else {
        console.log("error in handleSubmit()");
        
    } 
}

export { handleSubmit }
