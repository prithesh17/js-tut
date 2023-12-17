const user1 = {
    name :"prithesh",
    
    email : "Priteshmarodi@gmail.com"
}


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = { obj1, obj2 }
const obj4 = Object.assign({}, obj1, obj2, obj3)

//const obj4 = {...obj1, ...obj2}
console.log(Object.values(obj4));