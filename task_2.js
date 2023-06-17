class Student {
    constructor(name, age, prof) {
        this.name = name,
        this.age = age,
        this.prof = prof
    }
}

const json = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}`

const data = JSON.parse(json);
const itemList = data.list;

let resultList = [];

for (const item of itemList) {
    resultList.push(
        new Student(item.name, item.age, item.prof)
    )
}
console.log("result", resultList);
