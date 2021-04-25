// Enter your code here
console.log('Enter your code here');
var input = document.getElementById('userinput');
var output = document.getElementById('intro');
function highlight() {
    let x = '\\b'+input.value+'\\b';
    let regex = new RegExp(x,'ig');
    let res = output.innerText.replace(regex, (matched) => {
        return `<span style="background-color:yellow;">${matched}</span>`;
    });
    output.innerHTML = res;
}
input.addEventListener('keyup',highlight, false);
input.addEventListener('keydown',highlight, false);