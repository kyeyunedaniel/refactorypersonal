// const form = document . <here we put the name of the form element> . <here we put the names of the field elements in the form>
const userName = document.registration.username
const date = document.registration.date
const telephone = document.registration.phoneNumber
const country = document.registration.country
const gender1 = document.registration.gender1
const gender2 = document.registration.gender2
const luganda = document.registration.luganda
const kiswa = document.registration.kiswa
const itesot = document.registration.itesot

// create a fucntion to check phone number
///^\d{10}+$/ checks the 10 digits as numbers 
const checkTelephone = () => {
    let validadatePhone = /^\d{10}+$/

    // check if empty
    if (telephone.value === "") {
        telephone.style.border = '2px solid red'
        telephone.focus()
    }

    // check whether value matches alphabet regex
    if (telephone.value.match(validadatePhone) ) {
        // checks if the telephone value has only letters and makes an alert if true
        telephone.style.border = '2px solid red'
        telephone.focus()
    } else {
        email.focus()
    }
}

// const checkEmail = () => {
//     let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/

//  //kyeyunedaniel0@gmail.com
// //daniel.kyeyune@student.ciu.ac.ug


//     // check if empty
//     if (email.value === "") {
//         email.style.border = '2px solid red'
//         email.focus()
//     }

//     // 
//     if (email.value.match(emailRegex)) {
//         country.focus()
//     } else {
//         email.style.border = '2px solid red'
//     }

// }

//  let numbers = /^[0-9]+$/
// let alphanumeric = /^[0-9a-zA-Z]+$/
// let aplhabet = /^[A-Za-z]+$/
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// 10digit regex  /^\d{10}+$/