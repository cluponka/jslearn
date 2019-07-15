// let jsName = prompt("what js name?", '');
// if (jsName == "ECMAScript") {
//     alert("yes");
// }
// else {
//     alert("no");
// }

// let jsName = prompt("what js name?", '');
// (jsName == 1) ? alert("yes") : alert("no");

// let val = prompt("enter number", '');
// if (val > 0) {
//     alert(1);
// } else if (val < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// let userName = prompt("your name", '');
// if (userName == "admin") {
//     let pass = prompt("enter pass", '');
//     if (pass == "qwerty") {
//         alert("hello, admin");
//     } else if (pass == null) {
//         alert("login failed");
//     } else {
//         alert("wrong pass")
//     }
// } else if (userName == null) {
//     alert("login failed");
// } else {
//     alert("I don't know you");
// }

// let login = prompt("name?", "");
// let message = (login == "Vasya") ? "hello" :
//     (login == "dir") ? "good" :
//         (login == "") ? "no" :
// '';

// let minAge = 14;
// let maxAge = 90;
// let yourAge = prompt("your age", '');
// if (yourAge >= minAge && yourAge <= maxAge) {
//     alert("welcome");
// } else {
//     alert("no");
// }

// if (age <= 14 || age >= 90);
// if (age !>= 14 || age !<= 90);

// for (let i = 0; i <= 10; ++i) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }
//
// let i = 1;
// while (i < 3) {
//     alert("number" + i);
//     i++;
// }

// let i = prompt("number", '');
// while (i < 100 && i != null)  {
//     i = prompt("number", '');
// }

// next:
// for (var i = 2; i <= 10; i++) {
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0 ) {
//             continue next;
//         }
//     }
//     alert(i);
// }
//
// let yourBrowser = prompt("What browser do you use?", '');
// if (yourBrowser === "IE") {
//     alert("you use shit");
// } else if (yourBrowser === "Chrome" || yourBrowser === "Opera" || yourBrowser === "Firefox") {
//     alert("you use norm browser");
// } else {
//     alert("hope, it's work");
// }

// let a = +prompt('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2, 3");
//         break;
//     default:
//         alert("i don't know");
// }


// var age = prompt("your age", '');
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(age);

// function min(a, b) {
//     return (a < b) ? alert(a) : alert(b);
// }
//
// min(10, 80);

// function pow() {
//     let x = prompt("x?", "");
//     let n = prompt("n?", "");
//     n >= 1 ? alert(Math.pow(x, n)) : alert("введите число больше 1");
// }
// pow();

function pow() {
    let result = x;
        for (var i = 1; i < n; i++) {
            result *=x;
        }
    return alert(result);
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
    alert("choose n > 1");
} else {
    pow();
}

