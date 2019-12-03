function handleSubmit(event) {
    event.preventDefault();
    let url = document.querySelector('#name').value;
    console.log(url)
    if(Client.checkUrl(url)) {
        console.log("::: Form Submitted :::");
        console.log("::: Generating Request :::");
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: url })
        })
        .then(res => res.json())
        .then(function(res) {
            document.querySelector('#polarity').innerHTML = res.polarity;
            document.querySelector('#subjectivity').innerHTML = res.subjectivity;
            document.querySelector('#polarity-confidence').innerHTML = res.polarity_confidence;
            document.querySelector('#subjectivity-confidence').innerHTML = res.subjectivity_confidence;
            document.querySelector('#article-text').innerHTML = res.text;

            console.log(":: handleSubmit RESPONSE ::")
            console.log(res)
            
        })
    } 
    else {
        console.log("error in handleSubmit()");
        
    } 
}

export { handleSubmit }



