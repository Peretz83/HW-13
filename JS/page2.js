let retDiv = document.createElement('div')
document.body.appendChild(retDiv)

// let myName = document.createElement('div');
// document.body.appendChild(myName)
// myName.style.width= "50px";
// myName.style.height= "50px";
// myName.style.backgroundColor= "red";

btnOne.addEventListener('click', () => {

  let retName = window.localStorage.getItem("myUserName")
  let retEmail = window.localStorage.getItem("myUserEmail")
  let retPass = window.localStorage.getItem("myUserPass")
  let realName = JSON.parse(retName)
  let realEmail = JSON.parse(retEmail)
  let realPass = JSON.parse(retPass)

  if (document.getElementById('input1').value === realName && document.getElementById('input2').value === realEmail && document.getElementById('input3').value === realPass) {

    document.getElementById('input1').value = ""
    document.getElementById('input2').value = ""
    document.getElementById('input3').value = ""

   

    location.href = "./page3.html"

  } else {
    alert('invalid')
  }
  document.getElementById('input1').value = ""
  document.getElementById('input2').value = ""
  document.getElementById('input3').value = ""

  

})

// let retDiv = document.createElement('div')
// document.body.appendChild(retDiv);

// btn.addEventListener("click",()=>{
//   let retName = window.localStorage.getItem("myUserName");
//   let retEmail = window.localStorage.getItem("myUserEmail");
//   let retPassword = window.localStorage.getItem("myUserPassword");
//   let realName = JSON.parse(retName);
//   let realEmail = JSON.parse(realEmail);
//   let realPassword = JSON.parse(retPassword);

//   if(document.getElementById('input1').value === realName && document.getElementById('input2').value === realEmail && document.getElementById("input3").value === realPassword){
    
//         document.getElementById('input1').value = ""
//     document.getElementById('input2').value = ""
//     document.getElementById('input3').value = ""

//     location.href = "./page3.html"

//   }else{
//     alert('invalid');
//   }
// })





