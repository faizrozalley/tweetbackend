console.log("Working with function");
function welcomeClassic(){
    console.log("I am classic function");
} 

function welcomeClassicParameter(name){
    console.log(`${name}, welcome to classic function`);
    console.log(name+", welcome to classic function");
}

let welcomeArrow = ()=>{
    console.log("Welcome from arrow function");
}

let welcomeArrowParameter = (name)=>{
    console.log(`${name}, Welcome from arrow function`);
}

welcomeClassic();
welcomeClassicParameter("Faiz");
welcomeArrow();
welcomeArrowParameter("Faiz2");