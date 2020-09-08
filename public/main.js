
function deleting(event) {
    event.target.parentElement.parentElement.style.display = "none"
    event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display = "block"
}

function updating(event) {
    event.target.parentElement.parentElement.style.display = "none"
    event.target.parentElement.parentElement.nextElementSibling.style.display = "block"
}

// fetch('/delete', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         title : event.target.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML
    //     })
    // })
    //     // .then(res => {
    //     //     if (res.ok) return res.json()
    //     // })
    //     .then(response => {
    //         location.reload()
    //     })