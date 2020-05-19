function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    submitUserData({text: formText})
    .then(res => {
        const result = document.getElementById('results')
        result.innerHTML = `<p>your text: ${res.text}<br/>lang: ${res.lang}<br/>confidence: ${res.confidence}</p>`;
    })
}
const submitUserData = async (formText={}) => {
    console.log(formText)
    const data = await fetch('/language', {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formText)
    })
    try {
        const finData = await data.json()
        return finData
    }catch(err) {
        console.log(err)
    }
}

export { handleSubmit }
