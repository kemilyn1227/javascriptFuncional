const students = [
    {name:'jake', score:6.4},
    {name: 'susan', score:8.6},
    {name: 'emma', score:9.4},
    {name: 'peter', score:9.1},

]

const greatStudents = students => students.score >= 9 
const getScore = el=>el.score
const avg = (acc, el , i , array)=>{
    if(i === array.length -1){
        return (acc+ el) / array.length
    }else{
        return acc + el 
    }
}

console.log(
    students
    .filter(greatStudents)
    .map(getScore)
    .reduce(avg)
    )
