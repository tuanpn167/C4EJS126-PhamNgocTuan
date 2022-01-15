// // BTVN - TUAN PHAM - BUOI 9



// // Q1

// // Sample
// // function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     } else {
// //       return confirm('Did parents allow you?');
// //     }
// //   }

// // using ? 
function checkAge(age) {
    return (age > 18) ? true : "Did parents allow you?";
}
console.log(checkAge(20));

// //using OR
function checkAge(age) {
    let check = age > 18 || confirm("Did parents allow you?");
    return check;
}
 console.log(checkAge(20));




// // Q2 find min

function checkMin(a, b) {
    return (a < b && a !== b) ? a : b;
}
console.log(checkMin(25, 15));




// // // Q3

// // // Sample
// // function ask(question, yes, no) {
// //   if (confirm(question)) yes()
// //   else no();
// // }

// // ask(
// //   "Do you agree?",
// //   function() { alert("You agreed."); },
// //   function() { alert("You canceled the execution."); }
// // );

// Using arrow function
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    (yes) => { alert("You agreed."); },
    (no) => { alert("You canceled the execution."); }
);




// // Q4 

let userName = prompt("Mời nhập tên đăng nhập: ");
let passWord;

function checkUserName(userName) {
    if (userName == "Admin") {
        passWord = prompt("Mời nhập mật khẩu: ");
        checkPassWord(passWord);
    } else if (userName == "" || userName == "Esc") {
        alert("Canceled");
    } else {
        alert("Tôi không biết bạn");
    }
}

function checkPassWord(passWord) {
    if (passWord == "cafedev") {
        alert("Chào mừng!")
    } else if (passWord === "") {
        alert("Đã hủy");
    } else {
        alert("Mật khẩu sai");
    }
}
checkUserName(userName);
