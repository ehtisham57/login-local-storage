const  userName= document.getElementById("userName")
const  userEmail= document.getElementById("userEmail")
const  userPassword= document.getElementById("userPassword")
const signUp = () =>{
    // console.log(userName.value)
    // console.log(userEmail.value)
    // console.log(userPassword.value)
    const obj = {
        userName: userName.value,
        userEmail:userEmail.value,
        userPassword:userPassword.value  
    }
    // console.log(obj)
    const viSitor = JSON.parse(localStorage.getItem("user")) || []
    viSitor.push(obj)
    localStorage.setItem("user", JSON.stringify(viSitor))
    // alert("FFF")
    window.location.assign("./login.html")
}
const logIn = ()=>{
const userEmail= document.getElementById("userEmail")
const userPassword= document.getElementById("userPassword")
const getData = JSON.parse(localStorage.getItem("user"))
console.log(getData.userEmail)
if(userEmail.value === getData.userEmail && userPassword === getData.userPassword){
    alert("Welcome")
}else{
    alert("try later")
}
}