const btn = document.getElementById('btn1');

btn.addEventListener('click', function(){



let height = document.querySelector('#exampleFormControlInput1').value;
let weight = document.querySelector('#exampleFormControlInput2').value;

if(height == '' || weight == ''){
    alert('Please fill out the input fields!');
    return;
}

//BMI = weight in kg//

height = height / 100


let BMI = (weight / (height * height));

BMI = BMI.toFixed(2);

document.querySelector('#result').innerHTML = BMI;

});