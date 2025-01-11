// function Generator(x,y,z){
//     let num = Math.floor(Math.random()*3)
//     if(num == 0)
//     return x
//     else if(num == 1)
//     return y
//     else
//     return z
// }

// console.log("Generated Name is "+Generator("Crazy","Amazing","Fire")+" "+Generator("Engine","Foods","Garment")+" "+Generator("Bros","Limited","Hub"))

let rand = Math.random()
let first , second , third;
if (rand <0.33){
    first = "Crazy"
}
else if (rand <0.66 && rand >=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}
let rand1 = Math.random()
if (rand <0.33){
    second = "Engine"
}
else if (rand1 <0.66 && rand1 >=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}
let rand2 = Math.random()
if (rand2 <0.33){
    third = "Bros"
}
else if (rand2 <0.66 && rand2 >=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}
console.log(`${first} ${second} ${third}`)