let userInfo = []

let btnOne = document.getElementById('btnOne')
 btnOne.style.backgroundColor = 'lightYellow'
 btnOne.style.marginLeft = '5px'
 btnOne.style.borderRadius = '5px'

btnOne.addEventListener("click", () => {
  let userName = document.getElementById("input1");
  let tempName = userName.value;
  let jsName = JSON.stringify(tempName);
  window.localStorage.setItem("myUserName", jsName);
  userName.value = "";

  let userEmail = document.getElementById("input2");
  let tempEmail = userEmail.value;
  let jsMail = JSON.stringify(tempEmail);
  window.localStorage.setItem("myUserEmail", jsMail);
  userEmail.value = "";

  let userPassword = document.getElementById("input3");
  let tempPass = userPassword.value;
  let jsPass = JSON.stringify(tempPass);
  window.localStorage.setItem("myUserPass", jsPass);
  userPassword.value = "";

  let newUser = {
    name: tempName,
    email: tempEmail,
    password: tempPass,
  }

  userInfo.push(newUser)

  location.href = "./page2.html"
});

// let userInfo = [];

// let btn = document.getElementById('btn');

// btn.addEventListener('click',()=>{


// let userName = document.getElementById('input1');
// let tempName = userName.value;
// let jsName = JSON.stringify(tempName);
// window.localStorage.setItem("myUserName", jsName);
// userName.value = "";

// let userEmail = document.getElementById('input2');
// let tempEmail = userEmail.value;
// let jsEmail = JSON.stringify(tempEmail);
// window.localStorage.setItem ("myUserEmail", jsEmail);
// userEmail.value = "";



// let userPassword = document.getElementById('input3');
// let tempPassword = userPassword.value;
// let jsPassword = JSON.stringify(tempPassword);
// window.localStorage.setItem("myUserPassword",jsPassword);
// userPassword.value = "";

// let newUser = {
//   name: tempName,
//   email:tempEmail,
//   password:tempPassword,
// }

// userInfo.push(newUser);

// location.href = "./page2.html"


// });

