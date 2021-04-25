// Enter your code here
console.log('Enter your code here');
var btn = document.querySelector('#btn');
var x = setInterval(changeBgColor, 3000);
btn.onclick = () => {
    var stpBtn = document.getElementById('btn');
    var input = document.getElementById('interval');
    if (stpBtn.value == 'Stop') {
        stpBtn.className = 'btn btn-primary';
        stpBtn.value = 'Start';
        input.disabled = false;
        clearTimeout(x);
    }
    else {
        stpBtn.className = 'btn btn-danger';
        stpBtn.value = 'Stop';
        input.disabled = true;
        x = setInterval(changeBgColor, input.value * 1000);
        console.log('Set interval'+x);
    }
}
function changeBgColor() {
    if(btn.value == 'Stop') {
        console.log('in change');
        var o = Math.round, r = Math.random, s = 255;
        var color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        document.body.style.backgroundColor = color;
    }
}