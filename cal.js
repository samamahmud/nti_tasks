function display(value) {
    document.getElementById('result').value += value;
}

function clearresult() {
    document.getElementById('result').value = "";
}

function calculate() {
    var p = document.getElementById('result').value;
    var r = eval(p)
    document.getElementById("result").value += "=" + r;
}