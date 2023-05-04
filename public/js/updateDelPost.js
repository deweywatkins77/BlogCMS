async function updateDelPost(event){
    event.preventDefault()
    let content = document.querySelector('#content').value.trim()
    let url = window.location.href
    let blog_id = url.split('/').pop()
    let response
    
    try{
        if (event.target.id === 'deleteBtn'){
            response = await fetch('/api/deletePost', {
                method: 'Delete',
                body: JSON.stringify({ blog_id }),
                headers: { 'Content-Type': 'application/json' }
                })
        }else{
            response = await fetch('/api/updatePost', {
                method: 'PUT',
                body: JSON.stringify({ blog_id, content }),
                headers: { 'Content-Type': 'application/json' }
                })  
        }

        if (response.ok){
            window.location.replace('/dashboard')
        } else {
            errorData = await response.json()
            alert(errorData.message)
        }
    } catch (err){
        console.log(err)
    }
}

let updateBtn = document.querySelector('#updateBtn')
let deleteBtn = document.querySelector('#deleteBtn')
updateBtn.addEventListener('click', updateDelPost)
deleteBtn.addEventListener('click', updateDelPost)