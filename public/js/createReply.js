async function createReply(event){
    event.preventDefault()
    let content = document.querySelector('#reply-text').value.trim()

    if (content){
        try{
            let blog_id = window.location.href.split('/').pop()
            const response = await fetch('/api/createReply', {
                method: 'PUT',
                body: JSON.stringify({
                    content,
                    blog_id 
                }),
                headers: { 'Content-Type': 'application/json' }
              });

            if (response.ok){
                window.location.reload()
            } else {
                errorData = await response.json()
                alert(errorData.message)
            }
        } catch (err){
            console.log(err)
        }
    }
}

 let loginForm = document.querySelector('.reply-form')
 loginForm.addEventListener('submit', createReply)