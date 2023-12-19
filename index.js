function checker(){
    let userInput = document.getElementById("num").value;
    let number = parseFloat(userInput);
    let sign;
            if (number > 0) {
                sign = "positive";
            } else if (number < 0) {
                sign = "negative";
            } else {
                sign = "zero";
            }
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "The entered number is " + sign + ".";
}