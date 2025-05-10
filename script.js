const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height == '' || weight == '' || weight <= 0 || height <= 0){
        result.innerHTML = 'Please provide a valid height or weight';
    }
    else{
        const bmi = ((weight / (height*height)) * 10000).toFixed(2);
        if(bmi<18.6){
            result.style.color = 'red';
            result.innerHTML = `Your BMI is ${bmi} (UNDERWEIGHT)`;
        }
        else if(bmi<24.9){
            result.style.color = 'green';
            result.innerHTML = `Your BMI is ${bmi} (NORMAL)`;
        }
        else{
            result.style.color = 'red';
            result.innerHTML = `Your BMI is ${bmi} (OVERWEIGHT)`;
        }
    }
})