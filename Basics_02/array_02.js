console.log("Hi prithesh")

const science = ["physics", "Biology", "chemistry","Maths"]

const Social = [
    "History",
    "Geography",
    "Econommics",
    "Business"
]

const arr1 = science.push(Social)
console.table(arr1)

const arr2 = science.concat(Social)
console.table(arr2)

const arr3 = [...science,...Social]
console.table(arr3)