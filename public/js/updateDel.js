async function delPost(id){
    try{
        response = await fetch('/api/delete/post', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' }
        })
        handleResponse(response)
    }catch(err){
        console.log(err)
    }
} 

async function updatePost(id){
    let content = document.querySelector(`[data-postContent="${id}"]`).value.trim()
    
    try{
        response = await fetch('/api/update/post', {
            method: 'PUT',
            body: JSON.stringify({ id, content }),
            headers: { 'Content-Type': 'application/json' }
        })
        handleResponse(response)
    }catch(err){
        console.log(err)
    }
} 

async function delReply(id){    
    try{
        response = await fetch('/api/delete/reply', {
            method: 'Delete',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' }
        })
        handleResponse(response)
    }catch(err){
        console.log(err)
    }
} 

async function updateReply(id){    
    let content = document.querySelector(`[data-replyContent="${id}"]`).value.trim()
    try{
        response = await fetch('/api/update/reply', {
            method: 'PUT',
            body: JSON.stringify({ content, id }),
            headers: { 'Content-Type': 'application/json' }
        })
        handleResponse(response)
    }catch(err){
        console.log(err)
    }
}

async function handleResponse(response){
    try{
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