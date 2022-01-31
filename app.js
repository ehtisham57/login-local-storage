const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const lastname = document.getElementById("lastname")
const address = document.getElementById("address")
const gender = document.getElementById("gender")


// console.log(username)
// console.log(email)
// console.log(password)
// console.log(lastname)
// console.log(address)
// console.log(gender)


const signup = () => {

    const Obj = {
        username: username.value,
        lastname : lastname.value,
        email: email.value,
        password: password.value,
        address : address.value,
        gender : gender.value
    }

    const user = JSON.parse(localStorage.getItem("userinfo")) || []
    console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === Obj.email
    })
    console.log(userIndex);
    if (userIndex === -1) {
        user.push(Obj)
        localStorage.setItem("userinfo", JSON.stringify(user))
        alert("you successfully signup")
        window.location.assign("./login.html")

    } else {
        alert("Try Another Email Address")
    }
  
}


// console.log(signup)

const login = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userData = JSON.parse(localStorage.getItem("userinfo"))
    // console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    // console.log(checkUser);
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("login")
        window.location.assign("./dashboard.html")
    } else {    
        alert("Incorrect Email/Pass")
    }
    email.value = ""
    password.value = ""

}


// console.log(login)




const dashboard = () =>{
    let head1 = document.getElementById("head1")
    let head2 = document.getElementById("head2")
    let head3 = document.getElementById("head3")

    const {username , lastname , gender, address } = JSON.parse(localStorage.getItem("currentUser"))
    head1.innerHTML = `Name : ${username}  ${lastname}` 
    head2.innerHTML = `Gender : ${gender}`
    head3.innerHTML = `Address : ${address}`    
}

// console.log(dashboard)

const logout = () =>{
    // Localhost.removeitem("currentuser")
    window.location.assign("./login.html")
}


// console.log(logout)