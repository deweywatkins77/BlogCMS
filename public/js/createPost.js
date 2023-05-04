async function createPost(event){
    event.preventDefault()
    let title = document.querySelector('#post-create').value.trim()
    let content = document.querySelector('#content-text').value.trim()

    if (title && content){
        try{
            const response = await fetch('/api/create/post', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' }
              })

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
}

 let loginForm = document.querySelector('.create-form')
 loginForm.addEventListener('submit', createPost)