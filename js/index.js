let menuIcons = document.querySelector('.menu-icons')
let body = document.querySelector('body')
let closeBtn = document.querySelector('.closeBtn')
let main = document.querySelector('.main')

let browseLink = document.querySelector('#browse')
let profileLink = document.querySelector('#profile')
let homeLink = document.querySelector('#home')
let aboutLink = document.querySelector('#about')

let signUpForm = document.createElement('form')
let mainContainer = document.querySelector('.main')
let beersTable = document.createElement('table')


let signInBtn = document.createElement('button')
let signUpBtn = document.createElement('button')
let generateBtn = document.createElement('button')

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}


function showRandom(beer) {  
  console.log(beer)
  createBeerTable()
  setBeerRow(beer)
}

document.addEventListener("DOMContentLoaded", () => {
  signInBtn.class = 'signin'
  signUpBtn.class = 'signup'
  generateBtn.class = 'generate'

  signInBtn.innerText = 'Sign-In'
  signUpBtn.innerText = 'Sign-Up'
  generateBtn.innerText = 'Generate'

  mainContainer.appendChild(signInBtn)
  mainContainer.appendChild(signUpBtn)
  mainContainer.appendChild(generateBtn)
})

browseLink.addEventListener('click', () => {  
  renderAll()
  closeNav()
})

homeLink.addEventListener('click', () => {
  location.reload()
})


document.addEventListener('click', (e) => {
  if (e.target === menuIcons) {
    openNav()
  } else if (e.target === closeBtn || e.target === body) {
    closeNav()
  }
})

signInBtn.addEventListener('click', () => {
  signInBtn.replaceWith()
  signUpBtn.replaceWith()
  generateBtn.replaceWith()
  userSignInPortal()
})

signUpBtn.addEventListener('click', () => {
  signInBtn.replaceWith()
  signUpBtn.replaceWith()
  generateBtn.replaceWith()
  userSignUpPortal()
})

generateBtn.addEventListener('click', () => {
  signInBtn.replaceWith()
  signUpBtn.replaceWith()
  generateBtn.replaceWith()
  fetchGenerateBeer()
})