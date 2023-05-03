async function createAccount(event){
    event.preventDefault()
    let user = document.querySelector('#user-create').value.trim()
    let password = document.querySelector('#password-create').value.trim()

    if (user && password){
        try{
            const response = await fetch('/api/create/account', {
                method: 'POST',
                body: JSON.stringify({ user, password }),
                headers: { 'Content-Type': 'application/json' }
              })

            if (response.ok){
                window.location.replace('/login')
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
 loginForm.addEventListener('submit', createAccount)