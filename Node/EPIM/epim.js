const details = {
    name :'Suresh',
    marks : [99,98,99,76],
    isStudent : true,
}
//const name = details.name
//const marks = details.marks
//const isStudent = details.isStudent

const {name,marks,isStudent}=details // destructuring objects there is no need for order
console.log(name,marks,isStudent) 

const friends = ['josh','shagy','suresh']
const [friend1,friend2,friend3] = friends