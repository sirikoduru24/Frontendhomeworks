// Enter your code here
// Here I implemented code for number palindrome So 010 will be considered as 10.
console.log('Enter your code here');
document.getElementById('number').oninput = () => {
    var number = document.getElementById('number').value;
    var output = document.getElementById('result');
    var validate = {
        checkForNumber:function(str) {
            var pattern = /^\d+$/;
            return pattern.test(str); 
        }
}
    if (validate.checkForNumber(number)) {
        var rev = checkIfPalindrome(Number(number));
        if (number == rev) {
            output.textContent = 'Yes. This is a palindrome!'
            output.style.color = "green";
        } else {
            output.textContent = 'No. Try again';
            output.style.color = "red";
        }
    } else {
        output.textContent = 'Please enter positive number as an input';
        output.style.color = 'black';
    }
}
function checkIfPalindrome(num) {
    var temp = num;
    var rem,rev = 0;
    while(temp != 0) {
        rem = temp % 10;
        rev = rev*10 + rem;
        temp = Math.floor(temp/10);
    }
    return rev;
}