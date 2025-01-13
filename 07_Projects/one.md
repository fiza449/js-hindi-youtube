## Projects Related to DOM
## Project 1

## Project 1 Link
[Click here] (https://stackblitz.com/edit/stackblitz-starters-7wgqmaf3?description=HTML/CSS/JS%20Starter&file=ColourChanger%2Findex.html&terminalHeight=10&title=Static%20Starter)

## Solution Code:

```javascript
//Project 1 javascript (if else used)code:
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
   console.log(button)
   button.addEventListener('click', (event) => {
      console.log(event)
	  console.log(event.target)
	  if(event.target.id ==='grey'){
		body.style.backgroundColor = 'grey';
	  }
	 if(event.target.id ==='white'){
		body.style.backgroundColor = 'white';
	  }
	 if(event.target.id==='blue'){
		body.style.backgroundColor = 'blue';
	  }
	 if(event.target.id==='yellow'){
		body.style.backgroundColor = 'yellow'
	  }
   })
})

//javascript code (switch case used):

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
   console.log(button)
   button.addEventListener('click', (event) => {
      console.log(event)
	  console.log(event.target)
	  const eventId = event.target.id;
	  switch(eventId)
	  {
		case 'grey':
			body.style.backgroundColor = 'grey';
			break;
		case 'white':
			body.style.backgroundColor = 'white';
			break;
		case 'blue':
			body.style.backgroundColor = 'blue';
			break;
		case 'yellow':
			body.style.backgroundColor = 'yellow';
			break;
	  }
   })
})
```