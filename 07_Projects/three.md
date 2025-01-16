## Project 3

```javascript
const clock = document.querySelector('#clock')
setInterval(()=>{
	let date = new Date();
	clock.innerHTML = date.toLocaleTimeString();
})
```