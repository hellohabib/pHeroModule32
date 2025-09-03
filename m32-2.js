const person={
    name: "Habib",
    age: 20,
    isStudent: true,
    friends: ["Alim","Balim","Calim","Dalim"]
}
console.log(person, "Type of person: ", typeof person);

// JSON.stringify();
// কোন Object কে JSON ফর্মাটের স্ট্রিং এ কনর্ভাট করে 
const objToJson=JSON.stringify(person);
console.log(objToJson,"Type of objToJson: ", typeof objToJson);

//JSON.parse()
// কোন JSON ফর্মাটের স্ট্রিং কে Object এ কনর্ভাট করে
const jsonToObj=JSON.parse(objToJson);
console.log(jsonToObj, "Type if jsonToObj: ", typeof jsonToObj);


