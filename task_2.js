class Student {
    constructor(firstName, secondName, lang, age, prof) {
        this.name = {
            first: firstName,
            second: secondName,
            lang: lang
        };
        this.age = age;
        this.prof = prof;
    }
}

const xml = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xml, "text/xml");

let resultList = [];
const studentList = xmlDOM.getElementsByTagName("student");

for (let i = 0; i < studentList.length; i++) {
    const studentNode = studentList[i];

    const nameNode = studentNode.getElementsByTagName("name")[0];
    const firstNameNode = nameNode.getElementsByTagName("first")[0];
    const secondNameNode = nameNode.getElementsByTagName("second")[0];
    const profNode = studentNode.getElementsByTagName("prof")[0];
    const ageNode = studentNode.getElementsByTagName("age")[0];

    const nameAttr = nameNode.getAttribute("lang");

    resultList.push(
        new Student(
            firstNameNode.textContent,
            secondNameNode.textContent,
            nameAttr,
            Number(ageNode.textContent),
            profNode.textContent)
    )
}
console.log("result", resultList)
