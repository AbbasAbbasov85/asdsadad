let myForm = document.getElementById("myForm")
let email = document.getElementById("email")
let password = document.getElementById("password")



function PostForm(e){
    e.preventDefault()
axios.post('https://655c839c25b76d9884fd6e12.mockapi.io/Namiq', {
    email: email.value,
    password: password.value
  })

  myForm.reset()
}
  myForm.addEventListener("submit" , PostForm )
