// Bài 11
//11.1
// Input: điểm 3 môn toán, sinh, lý
// Output: điểm trung bình và tổng điểm 3 môn

// var math = 10;
// var chemistry = 9;
// var physics = 10;
// var average = (math + chemistry + physics)/3 ;
// var total = (math + physics + physics);

// console.log("Average = ", average);
// console.log("Total = ", total);

//11.2

// var celcius = 0;
// var fahrenheit = celcius/5*9+32;
//  console.log("Fahrenheit =", fahrenheit);

//11.3

// var radius = 4;
// var mathpi = 3.14;
// var acreage = (mathpi * radius * radius);
// var perimeter = (2 * mathpi * radius);
// console.log("Acreage =", acreage);
// console.log("Perimeter", perimeter);

// var chemistry = +prompt("Mời bạn nhập điểm môn hoá: ");
// var math = +prompt("Mời bạn nhập điểm môn toán: ");
// var physics = +prompt("Mời bạn nhập điểm môn lý: ");

// console.log(typeof chemistry);

// var average = (Number(chemistry) + Number(math) + Number(physics)) / 3;

// console.log("Điểm trung bình của 3 môn là: ", average);

// Modal xác nhận từ người dùng
// var isLogout = window.confirm("Bạn có muốn đăng xuất không?")
// if(isLogout === true) {
//     console.log("Đăng xuất thành công")
// } else {
//     console.log("Bạn đã huỷ đăng xuất!")
// }

// Dạng thông báo (Alert)
// window.alert("Phiên đăng nhập của bạn đã hết.")

// Yêu cầu người dùng nhập vào tuổI, nếu tuổi lớn hơn 18 và là con trai thì hiển thị thông đi báo là đủ điều kiện, 
// ngược lại không đủ điều kiện.

// var age = +prompt ("Mời bạn nhập tuổi của bản thân: ");
// var gender = +prompt ("Mời bạn nhập giới tính: ");

// console.log(typeof age);

// if(age >= 18 && gender === "Nam") {
//    alert("Đủ điều kiện. ");
// } else {
//    alert("Không đủ điều kiện.");
// }


//  Những giá trị sẽ nhận là false trong js
//  Một chuỗi rỗng, false, null, 0, NaN, undefined
var value = undefined;
if (value) {
    console.log("Điều kiện đúng");
} else {
    console.log("Điều kiện sai");
}

