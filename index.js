// Bai1:

// InPut:nhap vao 3 so nguyen 

// Process:
// 1. lay 3 so nguyen
// 2.sap xep thu tu tang dan

// output: xuat ra 3 so theo thu tu tang dan

function scoreHigh() {
    var a = +document.getElementById("txta").value;
    var b = +document.getElementById("txtb").value;
    var c = +document.getElementById("txtc").value;
    var score = [a, b, c];
    score.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log(score);
}


// Bài3:
// Input:xem xét ai là người đang sử dụng máy tính

// Process:
// 1.láy thông tin người đang sd máy tính 
// 2.trả về kết quả 

// Output:sẽ đưa ra 1 lời chào hợp lý

function helloFamily() {
    var fatherInput = document.getElementById("father");
    var motherInput = document.getElementById("mother");
    var sonInput = document.getElementById("son");
    var daughterInput = document.getElementById("daughter");
    if (fatherInput.checked === true) {
        familyType = "father";
    } else if (motherInput.checked === true) {
        familyType = "mother";
    } else if (sonInput.checked === true) {
        familyType = "son";
    } else if (daughterInput.checked === true) {
        familyType = "daughter";
    } else {
        alert("vui long chon !!!");
        return;
    }
    switch (familyType) {
        case "father":
            console.log("xin chào ba ba !!!!");
            break;
        case "mother":
            console.log("xin chào ma ma !!!!");
            break;
        case "son":
            console.log("xin chào chàng trai trẻ !!!!");
            break;
        case "daughter":
            console.log("xin chào bé gái nhỏ nhất gia đình!!!!");
            break;
        default:
            break;
    }
    console.log(familyType);
}

// Bài4:
// Input:nhập vào 3 số nguyên 

// process:
// 1.lấy 3 số nguyên người dùng nhập vào 
// 2.kiểm tra số lẻ vào số chẵn và đếm
// 3.xuất ra kết quả

// Output:xuất có bao nhiêu số chẵn vào lẻ

function checkEvenOdd() {
    var a = +document.getElementById("txta").value;
    var b = +document.getElementById("txtb").value;
    var c = +document.getElementById("txtc").value;
    var demle = 0;
    var demchan = 0;
    var score = [a, b, c];
    function test() {
        for (var i = 0; i < score.length; i++) {
            if (score[i] % 2 === 0) {
                demchan++;
            } else {
                demle++;
            }
        }
        console.log(score);
    }
    test(score);
    console.log("Số chẵn gồm có ", demchan, "số");
    console.log("Số lẻ gồm có ", demle, "số");
}

// Bài5:
// Input:cho người dùng nhập tháng năm 

// process:
// 1.láy dữ liệu người dùng nhập 
// 2.kiểm tra xem tháng đó có bao nhiêu ngày 
// 3.láy được kết quá xuất ra cho người dùng

// OutPut:xuất tháng đó có bn ngày cho người dùng xem 
function checkMonthYear() {
    var monthInput = +document.getElementById("txtmonth").value;
    var yearInput = document.getElementById("txtyear").value;
    var yearArr = yearInput.split('');
    function checkyear(a) {
        var A = a[2];
        var B = a[3];
        var result = parseInt(A + B);
        if (result % 4 === 0) {
            console.log(yearInput, "là năm nhuần ");
            switch (monthInput) {
                case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        console.log("Tháng:",monthInput,"Năm: ",yearInput," có 31 ngày");
                        break;
                    case 2:
                        console.log("Tháng:",monthInput,"Năm: ",yearInput,"29 ngày");
                        break
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        console.log("Tháng:",monthInput,"Năm: ",yearInput,"30 ngày");
                        break
                    default:
                        console.log("tháng này không tồn tại!!!")
                        break;
            }
        } else {
            switch (monthInput) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    console.log("Tháng:",monthInput,"Năm: ",yearInput," có 31 ngày");
                    break;
                case 2:
                    console.log("Tháng:",monthInput,"Năm: ",yearInput,"28 ngày");
                    break
                case 4:
                case 6:
                case 9:
                case 11:
                    console.log("Tháng:",monthInput,"Năm: ",yearInput,"30 ngày");
                    break
                default:
                    console.log("tháng này không tồn tại!!!")
                    break;
            }
        }
    }
    checkyear(yearArr);


}

// Bài 7:
// Input: nhập vào 3 số nguyên 

// Process:
// 1.láy giá trị 3 số nguyên vừa nhập
// 2.kiểm tra xem xem có số nào giá trị âm chuyển về dương
// 3.trả về kết quả

// output: xuất kết quả ra màn hình
 function checkRealNumber(){
    var a = +document.getElementById("txta").value;
    var b = +document.getElementById("txtb").value;
    var c = +document.getElementById("txtc").value;
    a=Math.abs(a);
    b=Math.abs(b);
    c=Math.abs(c);
    console.log("xuất ra các số đã cho giá trị tuyệt đối:", a , b ,c);
    
 }

//  Bài 8:
//  Input:nhập vào 3 số nguyên 

//  Process:
//  1.lấy giá trị 3 số nguyên vừa nhập
//  2.xuất ra cách đọc

//  Output: xuất ra KQ 

function inRead(){
   var numberInput = document.getElementById("txtnumber").value;
   var numberarr = numberInput.split('');
   function read (a){
        console.log("Cách đọc là :" ,a[0],"trăm",a[1],"mươi",a[2])
   }
read(numberarr);
}