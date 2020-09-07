
// const deleteButton = document.querySelector('#delete-button')
// const messageDiv = document.querySelector('#message')

function list_click(value) {
    let id = value
    fetch('/bring', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id : id
        })
    })
        // .then(res => {
        //     if (res.ok) return res.json()
        // })
        // .then(response => {
        //     messageDiv.innerHTML = response
        //     location.reload()
        // })
}