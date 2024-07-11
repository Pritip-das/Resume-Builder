function generateResume(){

  var a = document.getElementById("name").value;
  var b = document.getElementById("phone").value;
  var c = document.getElementById("email").value;

  if(a==""||b==""||c==""){
    alert('Please fill the required fields');
    return false;
  }
  else if(b.length<10||b.length>10){
    alert('Number should be of 10 Digits ! Please enter a valid number');
    return false;
  }
  else if(isNaN(b)){
    alert('Only numbers are allowed ! Please enter a valid number');
    return false;

  }

  console.log('done1');
  let name = document.getElementById("name").value;
  document.getElementById("nameT").innerHTML = name;

  let phone = document.getElementById("phone").value;
  document.getElementById("phoneT").innerHTML = phone;

  let email = document.getElementById("email").value;
  document.getElementById("emailT").innerHTML = email;

  let address = document.getElementById("address").value;
  document.getElementById("addressT").innerHTML = address;

  let linkedin = document.getElementById("linkedin").value;
  document.getElementById("linkedinT").innerHTML = linkedin;

  let github = document.getElementById("github").value;
  document.getElementById("githubT").innerHTML = github;

  let profile = document.getElementById("profile").value;
  document.getElementById("profileT").innerHTML = profile;

  console.log('done2')


let skill = document.getElementsByClassName("skillsField");

let str = "";

for(let e of skill){
  str = str + `<li> ${e.value} </li>`;
}

document.getElementById("skillsT").innerHTML = str;


console.log('skill done')

let edu = document.getElementsByClassName("eduField");

let strEdu = "";

for(let e of edu){
  strEdu = strEdu + `<li> ${e.value} </li>`;
}

document.getElementById("eduT").innerHTML = strEdu; 





console.log('edu done')

let ach = document.getElementsByClassName("achField");

let strAch = "";

for(let e of ach){
  strAch = strAch + `<li> ${e.value} </li>`;
}

document.getElementById("achT").innerHTML = strAch; 

console.log('ach done')

let exp = document.getElementsByClassName("expField");

let strExp = "";

for(let e of ach){
  strExp = strExp + `<li> ${e.value} </li>`;
}

document.getElementById("expT").innerHTML = strExp; 

  // setting image

  let file = document.getElementById("photo").files[0];

console.log(file); 

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);


reader.onloadend = function(){
  document.getElementById("photoT").src = reader.result;
};

console.log('phone done')


console.log('not done')


document.querySelector('.resumeForm').style.display = 'none';
document.querySelector('.cv').style.display = 'block';

}
function printCV(){
  window.print();
}


function addNewEdu(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("eduField");
  newNode.setAttribute("rows",3);

  let eduOb = document.getElementById("edu");
  let addButtonObEdu = document.getElementById("addButtonE");

  eduOb.insertBefore(newNode,addButtonObEdu);


  console.log('done');
}

function addNewSkill(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("skillsField");
  newNode.setAttribute("rows",3);

  
  let skillOb = document.getElementById("skill");
  let addButtonObSkill = document.getElementById("addButtonS");

  skillOb.insertBefore(newNode,addButtonObSkill);

  console.log('done');

}

function addNewAch(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("achField");
  newNode.setAttribute("rows",3);

  
  let achOb = document.getElementById("ach");
  let addButtonObAch = document.getElementById("addButtonA");

  achOb.insertBefore(newNode,addButtonObAch);

  console.log('done');

}



function addNewExp(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("expField");
  newNode.setAttribute("rows",3);

  
  let expOb = document.getElementById("exp");
  let addButtonObExp = document.getElementById("addButtonEx");
  console.log('done');

  expOb.insertBefore(newNode,addButtonObExp); }

 

  console.log('done');

