let input = document.getElementById("input1");
let result = "";

// AC
function fun1() {
    result = "";
    input.value = result;
}

// Delete last
function fun2() {
    result = result.toString().slice(0, -1);
    input.value = result;
}

// =
function fun3() {
    try {
        result = eval(result);
        input.value = result;
    } catch {
        input.value = "Error";
    }
}

// /
function fun4() {
    result += "/";
    input.value = result;
}

// Numbers
function fun5(){ result += "9"; input.value = result; }
function fun6(){ result += "8"; input.value = result; }
function fun7(){ result += "7"; input.value = result; }
function fun9(){ result += "6"; input.value = result; }
function fun10(){ result += "5"; input.value = result; }
function fun11(){ result += "4"; input.value = result; }
function fun13(){ result += "3"; input.value = result; }
function fun14(){ result += "2"; input.value = result; }
function fun15(){ result += "1"; input.value = result; }
function fun17(){ result += "0"; input.value = result; }
function fun18(){ result += "00"; input.value = result; }

// Operators
function fun8(){ result += "+"; input.value = result; }
function fun12(){ result += "-"; input.value = result; }
function fun16(){ result += "*"; input.value = result; }

// Decimal
function fun19(){
    result += ".";
    input.value = result;
}

// %
function fun20(){
    result = eval(result) / 100;
    input.value = result;
}