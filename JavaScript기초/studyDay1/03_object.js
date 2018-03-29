var server1 = {
  "name": "정보경",
  "age": 24,
  "married": false
};

var server2 = {
  name: "정보경",
  age: 24,
  married: false
};

console.log(server1);
console.log(server2);

//Object() 생성자 함수를 이용한 JSON객체 생성
var server3 = new Object();
server3.name = "정보경";
server3.age = 24;
server3.married = false;

//객체 리터럴 방식을 사용한 JSON객체 생성
var server4 = {
  name: "정보경",
  age: 24,
  married: false
}


var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
////JSON 파일을 javascript에서 사용할수있게 변수에 할당한것 원래 모습은
//"employees":[
  //  {"firstName":"John", "lastName":"Doe"},
    //{"firstName":"Anna", "lastName":"Smith"},
    //{"firstName":"Peter", "lastName":"Jones"}
//]

var data = JSON.parse(text);


var employees = {};

for (var i = 0; i < data.employees.length; i++) {
    employees[data.employees[i].firstName] = data.employees[i];
}

console.log(employees[0].firstName);       // logs "Harry"
console.log(employees[0].lastName); 

console.log("-------------객체 생성 비교-----------------");
console.log(server3);
console.log(server4);


console.log("-------------객체 프로퍼티 읽기-----------------");
console.log(server1["name"]);
//console.log(server1[name]); //프로퍼티 이름을 문자열로 처리해주지 않았을때
console.log(server1.name);

console.log("-------------for in 문으로 순회-----------------");
for(var index in server1){
	console.log(index, server1[index]);
}
console.log("-------------delete로 삭제 후 순회-----------------");
delete server1.name;
for(var index in server1){
	console.log(index, server1[index]);
}
