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


console.log(data);
console.log(typeof data);// 배열이라는 object


var parsingdata = data.employees[0];
var parsingdata1 = data.employees[1];
var parsingdata2 = data.employees[2];


console.log(parsingdata);
console.log(typeof parsingdata);
console.log(parsingdata1);
console.log(typeof parsingdata1);
console.log(parsingdata2);
console.log(typeof parsingdata2);

//이처럼 딕셔너리배열을 만들수있다. JSON파일을 파싱해서 data라는 배열변수(object)에 넣었고
//한 인덱스에 들어있는 것들이 각각 딕셔너리!
