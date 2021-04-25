// Enter your code here

console.log('Enter your code here');

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
let div = document.createElement('div');
let header = document.createElement('div');
var footer = document.createElement('div');
var flag = ' ';
document.getElementById('parse').onclick = () => {
    div.innerHTML,header.innerHTML, footer.innerHTML = " ";
    div.hidden = false;
    flag = ' ';
    var array = [];
    var text = document.getElementById('comments').value;
    div.className = "bg-light border rounded w-50 mx-auto mt-5 p-3";
    var url = decodeURIComponent(text);
    var givenURL = url.split('?');
    div.append(header);
    div.appendChild(footer);
    if(validateURL(givenURL[0])) {
        //console.log('here');
        header.innerHTML = ('<h1> Results </h1>'+ '<h4> URL </h4>'+'<span>'+ givenURL[0] + '</span>');
    } else {
        header.innerHTML = ('<span> Invalid URL</span>');
    }
    console.log(givenURL[1].trim() != '')
    if(givenURL[1].trim() != '') {
        var temp = givenURL[1];
        var params = temp.split('&');
         for (param of params) {
            x = param.split('=');
            if(!x[0] || !x[1]) {
                flag = 'bad';
            } else {
                array.push(x[0] + ':' + x[1]);
            }
         }
         if (flag == 'bad') {
            footer.innerHTML = 'Bad Query Parameters';
         } else {
            footer.innerHTML = '<h4> Query Parameters </h4>' + array.join('<br>') + '</br>';
         }
    } 
}   
function validateURL(url) {
    var regex = /^((http[s]*):\/\/)([A-z]+)\.([A-z]{2,})/;
    return regex.test(url.trim());
 }
document.getElementById('reset').onclick = () => {
   div.hidden = true;
   flag = ' ';
}
document.body.append(div);