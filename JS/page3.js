let myUl = document.getElementById("my-ul")
let welcomeDiv = document.createElement('div')
myUl.appendChild(welcomeDiv)
welcomeDiv.style.color = "white"

let welcomeName = window.localStorage.getItem("myUserName")
 let realUserName= JSON.parse(welcomeName);
welcomeDiv.style.marginLeft = "20px"

welcomeDiv.innerHTML =
"Welcome: " + realUserName




let myBtn = document.getElementById('myBtn')

// let welcomeDiv = getElementById('welcome-div')

let changeBgColor = () => {
  let r = document.getElementById("inputOne").value;
  let g = document.getElementById("inputTwo").value;
  let b = document.getElementById("inputThree").value;

  return `rgb(${r},${g},${b})`;
};

let myDiv = document.getElementById('colorDiv')
myBtn.addEventListener("click", () => {

 myDiv.style.backgroundColor = changeBgColor()


})

let saveBtn = document.getElementById('save-btn')

saveBtn.addEventListener('click', () => {
  let red = document.getElementById("inputOne")
  let green = document.getElementById("inputTwo")
  let blue = document.getElementById("inputThree")

  let tempRed = red.value
  let tempGreen = green.value
  let tempBlue = blue.value

  let jsRed = JSON.stringify(tempRed)
  let jsGreen = JSON.stringify(tempGreen)
  let jsBlue = JSON.stringify(tempBlue)

  window.localStorage.setItem("myRedColor", jsRed)
  window.localStorage.setItem("myGreenColor", jsGreen)
  window.localStorage.setItem("myBlueColor", jsBlue)

  document.getElementById("inputOne").value = ""
  document.getElementById("inputTwo").value = ""
  document.getElementById("inputThree").value = ""

  myDiv.style.backgroundColor = ""
})

let showAgainBtn = document.getElementById('show-again')

let colorDiv = document.createElement('div')
document.body.appendChild(colorDiv)

showAgainBtn.addEventListener("click", () => {
  let retRed = window.localStorage.getItem("myRedColor");
  let retGreen = window.localStorage.getItem("myGreenColor");
  let retBlue = window.localStorage.getItem("myBlueColor");

  let realRed = JSON.parse(retRed);
  let realGreen = JSON.parse(retGreen);
  let realBlue = JSON.parse(retBlue);

myDiv.style.backgroundColor = `rgb(${realRed},${realGreen},${realBlue})`
});