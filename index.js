// Add your code here

function submitData(name, email) {
    
    const newUser = {
        name: name,
        email: email
    }

    const configureUser = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newUser)
    }

    return fetch ("http://localhost:3000/users", configureUser)
    .then (response => response.json())
    .then (data => document.body.innerHTML = data.id)
    .catch(error => document.body.innerHTML = error.message)
}