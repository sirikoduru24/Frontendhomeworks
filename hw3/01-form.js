// Enter your code here

console.log('Enter your code here');
document.getElementById('btn').onclick = (e) => {
    e.preventDefault(); // To prevent reload
    console.group('=========Form Submission=========');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let classReg = document.getElementById('class-select').value;
    let selectedClass = document.forms[0].elements['class-section'].value;
    let checkBoxValue1 = document.forms[0].elements['option1'];
    let checkBoxValue2 = document.forms[0].elements['option2'];
    let checkBoxValue3 = document.forms[0].elements['option3'];
    let arr1 = [checkBoxValue1.value, checkBoxValue2.value, checkBoxValue3.value];
    let arr2 = [checkBoxValue1.checked, checkBoxValue2.checked, checkBoxValue3.checked];
    let textArea = document.getElementById('tarea').value;
    var coursesTaken = [];
    if(!name) {
        console.log('Name: no name');
    } else {
        console.log('Name: '+name);
    }
    if(!email) {
        console.log('Email: no email');
    } else {
        console.log('Email: '+email);
    }
    if(!classReg) {
        console.log('Class Registration: no selection');
    } else {
        console.log('Class Registration: '+classReg);
    }
    if(!selectedClass) {
        console.log('Class Selection: no selection');
    } else {
        console.log('Class Selection: '+selectedClass);
    }
    if (!checkBoxValue1.checked && !checkBoxValue2.checked && !checkBoxValue3.checked) {
        console.log('Courses Taken: none of the courses');
    } else {
        for (var i=0; i< arr1.length; i++) {
            if (arr2[i]) {
                coursesTaken.push(arr1[i]);
            }
        }
        console.log('CoursesTaken: '+ coursesTaken.join(','));
    }
    if(!textArea) {
        console.log('Feedback: No feedback given')
    } else {
        console.log('Feedback: '+textArea);
    }
    console.groupEnd();
}