//1 predicted no output / undefined. This was because hello is logged before it is declared
// console.log(hello);                                   
// var hello = 'world'; 

//2 predicted 'magnet' given the hoisting below
// var needle = 'haystack'; //TOP
// test(); //3RD
// function test(){  //2ND
//     var needle = 'magnet';
//     console.log(needle);
//}

// 3 predicted 'only ok' followed by 'only ok'
// var brendan = 'super cool'; //1st
// function print(){   //2nd
//     brendan = 'only okay';
//     console.log(brendan);
// }
// print(); //3rd
// console.log(brendan); //4th

//4th predicted 'chicken' 'half-chicken', this is correct
// var food = 'chicken'; //2ND
// console.log(food); //3RD
// eat(); //4TH
// function eat(){ //1st
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

//5th predicted mean() undefined as function throws a syntax error
// mean();
// console.log(food); //4th
// var mean = function() { //1st 
//     food = "chicken";
//     console.log(food); //2nd
//     var food = "fish";
//     console.log(food); //3rd
// }
// console.log(food); //5th

// //6th predicted rock, r&b, disco // wrong console.log throws error as it doesn't have access to genre
// console.log(genre); //3rd
// var genre = "disco"; //2nd
// rewind(); //4th
// functioncopy rewind() { //1st
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); //5th

//7 below is actual code followed by rearranged how I predicted. I was mistaken by access to var dojo within the function. I thought defining it outside the function was making it global.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// function learn() {
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

//8 rearranged code, order not an issue however const 'dojo' was reassigned, no good results in error
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }


function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));