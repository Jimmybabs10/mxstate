let array = ["goat", "dog", "Lion", "Tiger", "Dammy", "Abiola", "Prosper", "Orange", "Apple"];

function getHuman(){
    var x = 4;
    while(x <= 6){
        console.log(array[x]);
        x++;
    }
}

const getFruit = ()=>{
    var x = 7;
    while(x <= 8){
        console.log(array[x]);
        x++;
    }   
}

function getAnimal(){
    var x = 0;
    while(x <= 3){
        console.log(array[x]);
        x++;
    }
}

getHuman()
getAnimal()
getFruit()