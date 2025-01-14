 ## Project 2
 [Click Here] (https://stackblitz.com/edit/stackblitz-starters-qstihrtk?file=BMIGenerator%2Findex.html,BMIGenerator%2Fscript.js,BMIGenerator%2Fstyle.css)

 ## Project 2 Javascript code

 ``` javascript
 const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
   event.preventDefault();

   const heightValue = document.querySelector('#height').value
   const weightValue = document.querySelector('#weight').value
   const height = parseInt(heightValue)
   const weight = parseInt(weightValue)
   const results = document.querySelector('#results');

   //Validate Height
   if (height ==='' || height < 0 || isNaN(height))
   {
	results.innerHTML = `Please provide a valid height ${height}`;
	return;
   }

   //Validate Weight
   else if (weight ==='' || weight < 0 || isNaN(weight))
	{
	 results.innerHTML = `Please provide a valid weight ${weight}`;
	 return;
	}
   
	//Calculate BMI

	const BMI  = (weight/ ((height/100)**2)).toFixed(2);
	results.innerHTML = `<span>Your BMI is ${BMI}</span>`;

	// BMI range statement
     const statement = document.querySelector('#statement')
	if(BMI <=18.6){
		statement.innerHTML = 'Under Weight';
	}
	else if(BMI > 18.6 && BMI <24.9){
		statement.innerHTML = 'Normal Range';
	}
	else if(BMI >=24.9){
		statement.innerHTML = 'Overweight';
	}
  
	}
   
)
 ```  