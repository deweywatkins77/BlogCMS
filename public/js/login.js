async function submitLogin(event){
    event.preventDefault()
    let email = document.querySelector('#email-login').value.trim()
    let password = document.querySelector('#password-login').value.trim()

    if (email && password){
        try{
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
              });

            if (response.ok){
                window.location.replace('/')
            } else {
                errorData = await response.json()
                alert(errorData.message)
            }
        } catch (err){
            console.log(err)
        }
    }
}

 let loginForm = document.querySelector('.login-form')
 loginForm.addEventListener('submit', submitLogin)