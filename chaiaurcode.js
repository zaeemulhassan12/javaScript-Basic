// const clock = document.getElementById('clock');

// setInterval(function () {
//   let date = new Date();

//   clock.innerHTML = date.toLocaleTimeString();
//   clock.style.backgroundColor = 'red';
//   clock.style.color = 'YELLOW';
// }, 1000);


//project number two 
// const form = document.querySelector('form');
//no// this usecase will give you empty
//no// const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//     if (bmi < 18.6) {
//       results.innerHTML = `
//         <h2>Your BMI: ${bmi}</h2>
//         <p>Under Weight</p>
//       `;
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//       results.innerHTML = `
//         <h2>Your BMI: ${bmi}</h2>
//         <p>Normal Range</p>
//       `;
//     } else {
//       results.innerHTML = `
//         <h2>Your BMI: ${bmi}</h2>
//         <p>Over Weight</p>
//       `;
//     }
    
//       }

// });

//PROJECT NUMBER THREE

console.log(`my nuber is ${Math.random()*100+1}`); 

const randdomNumber =parsInt(math.random()*100+1);