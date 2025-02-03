const users = [
    { firstName: "Palak", lastName: "Gulati", age: "30" } ,
    { firstName: "Priti", lastName: "Kashyap", age: "28" } ,
    { firstName: "Ragav", lastName: "Sharma", age: "29" } ,
    { firstName: "Sanvi", lastName: "Anand", age: "30" } ,
    { firstName: "Ayushi", lastName: "Sharma", age: "27" } ,
    { firstName: "Meenu", lastName: "Verma", age: "29" } ,
];

const firstName = users.filter((user)=> {return user.age == 30}).map((userName) => {return userName.firstName});

console.log(firstName);