// // Toán tư số học: +,-*,++,/,%.--
// var numberA = 3+4;
// var numberB = 7-5;
// var numberF = 7*5;
// var numberE = 7/5//=> đưa ra kq là giá trih thực tế  tính cả phần thập phâm
// var numberC = 5%2;//=> Lấy phần dư
// console.log("numberA: ",)
// console.log("numberB: ",)
// console.log("numberC: ",)
// console.log("numberD: ",)

// //Toán tử gán
// var number1 = 10;
// number1 = number1 + 10
// //number1 = number1 + 10;
// number1 += 10;

// var number2 = 20;
// //number2 = number2 - 10;
// number2 -= 10;

// var number3 = number1 - number2;
// console.log("Number3: ", number3);

// var math = 10;
// var physics = 10;
// var chemistry = 10;
// var average = (math + physics + chemistry)/3;
// console.log("Average = ", average);


// var usd = 1;
// var vnd = usd*23000;
// console.log("VND = " , vnd, "vnd");


// Toán tử so sánh >, <, ==, ===, >=, <=
// -> Kết quả nhận được sau các phép so sánh là boolen (true hoặc false)
// var myNumberA = 20;
// var myNumberB = "10";
// var result = myNumberA <= myNumberB;
// console.log("Result ===> ", result);


// Toán tử logic: hoặc hoặc (||), và và (&&), phủ định (!)

var email = "quy@gmail.com"; //Hình dung email nhập từ người dùng
var passwword = "12345678"; // HÌnh dung mật khẩu nhập tử người dùng
var isMale = true;
console.log(!isMale);

if (email === "quy@gmail.com" && passwword === "12345678") {
    // Công việc khi điều kiện đúng
    console.log("Điều kiện đúng, đăng nhập thành công");
} else  {
    // Công việc khí điều kiện sai
    console.log("Điều kiện sai, đăng nhập thất bại"); 
}


var isMale = 0;
var isFemale = 1;
var orther = 2;

if(isMale === 0 && isFemale != 1) {
    console.log("Điều kiện đúng")
} else {
    console.log("Điều kiện sai")
}





