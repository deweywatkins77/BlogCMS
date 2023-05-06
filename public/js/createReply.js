async function createReply(event){
    event.preventDefault()
    let content = document.querySelector('#reply-text').value

    if (content){
        try{
            let url = window.location.href
            let blog_id = url.split('/').pop()
            const response = await fetch('/api/create/reply', {
                method: 'POST',
                body: JSON.stringify({
                    content,
                    blog_id 
                }),
                headers: { 'Content-Type': 'application/json' }
              })

            if (response.ok){
                window.location.reload()
            } else if (response.status === 401 ){
                window.location.href = "/login"
            }
            else {
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