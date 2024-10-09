const githubName = "elbmo";
const age = 24;
const hobbies = ["Voetbal, slapen, programmeren"];
const grades = [5, 4, 6, 4];

function greeting(name) {
    let greet = "Hallo " + name + ",";
    

  console.log(greet);
  return greet;
}

function showMessage(msg){
    const msgBox = document.querySelector
    const msgbox = document.querySelector(".msg-box")
    msgbox.textContent = msg;
}

greeting(githubName);
setTimeout(()=>{
    greeting("tttt");
}
, 5000)
showMessage("Dit is een nieuw bericht")