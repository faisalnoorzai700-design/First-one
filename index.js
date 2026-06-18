// //var ahmad="66";
// //console.log(ahmad);
// //ahmad="12";
// //console.log(ahmad);

// const { createElement } = require("react");

// //const noorzai="17";

// // console.log(noorzai);
// const ahmad=`${5*5}`;
// const noorzai=`wellcome,${2*5},${ahmad},wellcome`;
// //console.log(noorzai);

// const number1=10;
// const number2=50;
// const result= number1 * number2;

// //console.log(result);

// //const fassed  = false;
// //if(fassed) {
//     //console.log("Hi, you're fassed")
// //} else {
//     //console.log("Sorry")
// //}
// let  marks;
// //console.log(marks);


// const markss= {
//     name:"faisal",
//     lastn:"noorzai",
//     age:21,
//     mark:95,
// }
// //console.log(typeof markss);

// const arr = [1, 2, 3, 4, 5, 6, 7]
// //console.log(arr)

// // Join array elements together
// const joinedArr = arr.join(",");
// console.log("Joined with comma:", joinedArr);

// const joinedArr2 = arr.join(" - ");
// console.log("Joined with dash:", joinedArr2);

// const joinedArr3 = arr.join("");
// console.log("Joined without separator:", joinedArr3);

// const date = new Date();
// //console.log(date)

// //let i = 1; 

// //while(i < 20) {
//     //console.log(i);
//     //i++;
// //}

// // for(l = 3; l < 20; l++) {
// //     // console.log(l);
    
// // }
// // function add(a ,b) {
// //     return a + b;
// // }
// // const sum = add(3, );
// // console.log(sum);

// // function test(){
// //     console.log(4);
// //     return false;
// //     console.log(3);
    
// //     return true;
// // }
// // const sss = test();
// // console.log(sss);


// const aa = (number); => {
//     return number * number
// } 

// const mir = aa(4);
// console.log(mir);



// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const labelName = document.getElementById("labelName");
// let count = 0;

// increaseBtn.onclick = function () {
//     count++;
//     labelName.textContent = count;
// }
// decreaseBtn.onclick = function () {
//     count--;
//     labelName.textContent = count;
// }
// resetBtn.onclick = function () {
//     count = 0;
//     labelName.textContent = count;
// }


// const PI = 3.14159;
// let raduis;
// let circumference;


// document.getElementById("mySubmit").onclick = function(){
//     raduis = document.getElementById("myText").value;
//     raduis = Number(raduis);
//     circumference = 2 * PI * raduis;
//     document.getElementById("myH1").textContent = circumference;
// }


// let age = 61
// ;

// if (age <= 0){
//     console.log("this age is not true")
// }
// else if (age <= 10) {
//     console.log("Hi wellcone child");
// }   

// else if (age >= 50){
//     console.log("you are so old.");
    
// }
// else {
//     console.log("No yuor are younger.");
    
// }

// const checkboxBtn = document.getElementById("checkboxBtn");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const sudreselt = document.getElementById("sudreselt");
// const paymentreselt = document.getElementById("paymentreselt");

// mySubmit.onclick = function(){
//     if(checkboxBtn.checked){
//         sudreselt.textContent = `you are subscribe`;
//     }
//     else{
//         sudreselt.textContent = `you are NOT subscribe`;
//     }

//     if(visaBtn.checked){
//         paymentreselt.textContent = `you are paying with Visa`;
//     }
//     else if(mastercardBtn.checked){
//         paymentreselt.textContent = `you are paying with Master Card.`;
//     }
//     else if(paypalBtn.checked){
//         paymentreselt.textContent = `you are paying with paypal`;
//     }
//     else{
//         paymentreselt.textContent = `you must select a payment.`;
// }

// }

// let role = "";

//     if(role = "moderator"){
//         console.log("moderator user");
//     }
//     else if (role = "guest") {
//     console.log("guest user");
// }
//     else console.log("nown user");

// let role = "moderator";

// switch (role) {
//     case 'guest':
//     console.log("guest user");
//     break;
//     case 'moderator':
//     console.log("moderator user");
//     break;
    
//     default:
//     console.log("known user");
//         break;
// }


// for (let a = 0; a < 3; a++){
//     console.log(a);
// }

// let i = 0;
// while(i <= 10){
//     if(i===5) break;
//     console.log(i);
//     i++;
// }

// let speed = 71;

// function checkspeed(speed) {
    
// } {
//     const speedlimit = 70;
//     const kmperpoint = 50;

//     if(speed <= speedlimit){
//     console.log("ok");
//     } else point const = Math.floor(speed - speedlimit % kmperpoint);
// } if (point >= 12){
//     console.log(suspnd licinse);
// } else console.log('point' , point);

//  

// const marks = [80, 80, 50]; 


// function calculate(marks){
//     let sum = 0;
//     for (let mark of marks)
//         sum += mark;
//     let average = sum / marks.length;

//     if(average < 60) return 'F';
//     if(average < 70) return 'D';
//     if(average < 80) return 'C';
//     if(average < 90) return 'B';
//     return 'A';
// }

// factory function

// function createCircle(raduis){
//     return {
//         raduis,
//         draw(){
//             console.log('draw');
//         }
//     }
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// const circle3 = createCircle(3);
// console.log(circle3);

// const faisal = {
//     raduis: 1,
//     reduis1: 2,
//     name: 'noorzai',
//     lastName: 'sahib',
//     pNoumber: 93700070399
// };

// faisal.color = 'white';
// faisal.draw = function() {}

// delete faisal.color;
// delete faisal.draw;

// console.log(faisal);

// let x = {value: 10};
// let y = x; 

// x.value = 20;
// let obj = {value: 120 };
// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// let obj = {value:20};
// function increase(obj){
//     obj.value++;
// }
// increase(obj)
// console.log(obj);

// const circle = {
//     raduis: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for(let key in circle)
//     console.log(key);
    
// for(let key of Object.keys(circle))
//     console.log(key, circle[key]);
    
// for(let entry of Object.entries(circle))
//     console.log(entry);

// if('raduis' in circle) console.log('noorzai khan');

// const circle = {
//     raduis: 10,
//     draw() {
//         console.log('draw');
//     }
// };

// const another = {};
// for(let key in circle)
//     another[key] = circle[key];

// const another = Object.assign({}, circle)


// const address = {
//     sreet: '12',
//     city: 'kabul',
//     zipCode: '1001',
// };
// function showAddress(address){
//     for(let key in address)
//         console.log(key, address[key]);
// }
// showAddress(address);


// let address = createAddress('20', 'zabul', '1001')
// console.log(address);

// function createAddress(street, city, zipCode){
//     return{
//     street,
//     city,
//     zipCode
//     }
// }


// let address = new Address('23', 'kandahar', '1001')

// console.log(address);

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// let address1 = new Address('12', 'afg', '1001');
// let address2 = new Address('12', 'afg', '1001');


// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));


// function Address(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }
// function areEqual(address1, address2){
//     return address1.street === address2.street &&
//             address1.city === address2.city &&
//             address1.zipcode === address2.zipcode;
// } 

// function areSame(address1, address2){
//     return address1 === address2;
// }

// let post = {
//     title: 'noorzai',
//     body: 'ahmad',
//     auther: 'faisal',
//     views: 20,
//     comment: [
//         {auther: 'a', body: 'b'},
//         {auther: 'a', body: 'b'},
//         {auther: 'a', body: 'b'},
//         {auther: 'a', body: 'b'},
//         {auther: 'a', body: 'b'},
//         {auther: 'a', body: 'b'},
//         {auther: 'a', body: 'b'},
//         {auther: 'a', body: 'b'},                        
//     ],
//     isLive: true 
// };
// console.log(post);
// let Lod = new Lod('aa', 'bb', 'ff', 20, [12]);

// console.log(Lod);


// function Lod(title, body, auther,) {
//     this.title = title;
//     this.body = body;
//     this.auther = auther;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false
// }

// const number = [4, 5];
// number.push(6, 7, 8);
// number.unshift(1, 2, 3, 4,);
// number.splice(4, 0, 'faisal', 'ahmad');
// console.log(number);

// const number = [1, 2, 3, 4, 'a', 5, 6, 1];

// console.log(number.indexOf(5));
// console.log(number.lastIndexOf(1));
// console.log(number.includes(6 )); 
// const number = [1, 2, 3, 4, 5];
// const joined = number.join('.')
// console.log(joined);

// const massege = 'my name is faisal ahmad';
// const parts = massege.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

// const number = [5, 4, 3, 2, 1, 0]
// number.sort();
// console.log(number);

// number.reverse();
// console.log(number);

// const number = [1, 2, 3, 4, -1];
// const allpositive = number.some(function(value){
//     return value >= 0;
// });

// console.log(allpositive);


// const numb = [1, 2, 3, 4, 5,];
// const atleastonepositive = numb.every(function(value){
//     return value >= 0;
// });

// console.log(atleastonepositive);

// const number = [1, 2, -2, -3];

// const filtered = number.filter(function(value){
//     return value >= 0;
// });
// console.log(filtered);

// const filtered = [1, 2, -1, -2];
// Const filter = number.filter(n => n >= 0);
// console.log(filter);

// const filtered = [1, 3, -4 -6];
// const number = filtered.filter(function(value){
//     return value >= 0
// });
// console.log(number);adr 
// walk(); 
// function walk() {
//     console.log('walk');
// }
// const run = function() {
//     console.log('run');
// };

// function sum() {
//     total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// };
// console.log(sum(1, 2, 10, 2000, 78));

// function sum(a, b, c, d) {
//     return a + b + c - d;
// };
// console.log(sum(1, 2, 3, 2));

// function sum(...args) {
//     return args.reduce((a, b) => a + b);
// }
// console.log(sum(3,4,5,7,45,56,23,12,10,100));

// const person = {
//     firstname: 'Mosh',
//     lastname: 'Hamidani',
//     get fullName() {
//         return '${person.firstname} ${person.lastname}'
//     }
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstname = parts[0];
//         this.lastname = parts[1];
//     }
// };
// person.fullName = ('Mosh Hamidani'),
// console.log(person);

// function Circle(redus, a, z, c) {
//     this.redus = redus;
//     this.a = a;
//     this.z = z;
//     this.c = c;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10, 8, 6, 9);

// circle.location = {x: 12}
// circle.phone = {phone: +93}
// circle.x = {x: 543}
// circle.y = {y: 321}

// delete circle.a;
// delete circle.z;

// let std = [
//     {name:'jan', fname:'ahmad', age:21},
//     {name:'karim', fname:'rahim', age:22},
//     {name:'kako', fname:'bacha', age:24}
// ];
// // document.write(std[2].name);
// for(let b = 0; b <std.length; b++);{
//     document.write(b + std[b].name);
// };
// console.log(std);

// let a = {
//     name:'ahmad',
//     fname:'jan',
//     age:33
// };
// for(let key in a){
//     document.write(key + " - " +a[key]+ "<br>");
// };

// a.name = 'khan';
// for(let i in a){
//     document.write(a[i]);
// }
// let b = [12, 23, 45, 'ahmad'];
// b[2] = 2.222;
// b[3] = 'faisal';
// console.log(b);

// let a = {
//     name:'13r',
//     fname:'herhb'
// };
// let c = new Object();
// c.name = 'ahmad',
// c.fname = 'jan',
// c.age = 3,
// c.lastname = 'koko'
// c.arb = function(){
//     return 23 + 27;
// }
// c.arr = [12, 34, 34, 55];
// document.write(c.name + '<br>');
// document.write(c.age + '<br>');
// document.write(c.arb() + '<br>');
// document.write(c.arr + '<br>' );
// document.write(c.fname);
// console.log(c);

// let bib = [12, 23, 'ahamd', 22];
// // bib.forEach(ff);

// // function ff(oo) {
// //     document.write(oo + '<br>');
// // };
// let bib [1] = 'jan'; fpr add Element
// delete bib [1];  for Delete elemet

// for (let m = 1; m <= 10; m++){
//     let number = 6;
//     document.write(m + 'x' + number + '=' + m*number +'<br>');
// }

// دا زب زیانی ده nested loop دی په جاواسکریپ کی
// یو انرر لوب دی بل اوترر لوب.انرر لوب یو وار تکراریزی اوتر لوب چو واره تکراریزی
// 

// let result = prompt('who old are you?');
// if(result >= 18){
//     alert('Oh Yes');
//     document.write('Hhh,Yes You Are Adult');
// }else{
//     alert('Mmm, No');
//     document.write('No, You Are Not Adult');
// }

// function ff(){
//     alert(15 + 15);
// }
// ff();
// function sum(a, b){
//     document.write(a + b +'<br>');
// }
// sum(10, 20);
// sum(15, 20);
// sum(10, 90  );
// let now;

// document.getElementById('now').innerText = 'Hi, Logins';
// document.getElementById('button1').innerText = 'logOut';
// now = document.getElementsByClassName('label')[0].innerText = 'again Remimber Me Please';
// now = document.getElementsByTagName('p')[0].innerHTML = 'Do Not Have Account. <a href=""> Ragister </a>';
// now = document.querySelector('#now').style.color = 'red';
// document.querySelector('#now').style.backgroundColor = 'green';
// document.querySelector('#now').style.border = '2px solid black';
// document.querySelector('#now').style.border = 'Reduis 1px';
// document.querySelector('#now').classList += ' ahmad jan khan 00';
// document.querySelectorAll('.username').innerHTML;
// function demo(){
//     prompt('Enter Your Name');
//     alert('Hi How Are You');
// };
// // document.getElementById('button').onclick = demo();

// document.getElementById('button').addEventListener('dblclick', demo);

// document.getElementById('button').addEventListener('click', function(){
//     prompt('Enter Your Last Name');
//     alert('Hi How Are You');
// });

// // now = document.guerySeletor('.input '):
// console.log(now);

// let p = createElement('p');

// this is for js Animation,for repeat action.
// setInterval(babo, 1000);
// let by = document.getElementById('h1');
// let num = 0;

// function babo() {
//     if(babo >50){
//         clearInterval(babo);
//     }
//     else{
//         num = num + 10;
//         by.style.marginLeft = num + 'px';
//     }
// };

// this is for one time animation.
// setTimeout(nano, 1000);
// let hi = document.getElementById('h1');
// let num = 0;

// function nano() {
// if(hi > 100){
//     clearTimeout(nano);
// }
// else{
//     num = num + 10;
//     hi.style.marginLeft = num + 'px';
// }

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    Inter(){
    console.log(`this is my name ${this.name}`);
    console.log(`this is my age ${this.age}`);
    }

    const faisal = new person("noozai", 21);
    const noorzai = new person("ahmad khan", 22);

}
    faisal.inter();
    noorzai.inter();

// class with inheritance یو کلاس دبل کلاس خوصوصیات اخلی..

class employee {
    constructor(name, salary,){
        this.name = name;
        this.salary = salary;
    }

    work(){
        console.log(`${this.name} is my name.`);
    } }

class manage extends employee {
    {
    constructor(name, salary, age);
    super(name, salary);
    this.age = age;
    }

    manageTeam() {
        console.log(`${this.name} is manage the team.`);
    }
    
    const ali = new employee("ahmad", 1200000, 22);
}

ali.work();
ali.manageTeam();

//another axample of class

class vihcles {
    constructor(brand){
        this.brand = brand
    }
    start(){
        console.log(`${this.brand} is started.`);
    } }

class car extends vihcles {
    drive(){
        console.log(`${this.brand} is driving`);
    } }

class bike extends vihcles {
    bike(){
        console.log(`${this.brand} is riding.`)
    } }

const carbrand = new vihcles("TOYOTA");

carbrand.start();
carbrand.drive();
carbrand.bike();

const promise = new promise((reslove, rejrct) => {
    console.log("start");
});

const promise = new promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Reload Data");
    }else{
        reject("Failed Data");
    }
});
promise.then(('data') => {console.log('data')});
promise .catch();