// Select value & button
const action = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
// set initial count
let count = 0;

action.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //console.log(e.currentTarget.classList); //check the class name
    if (e.currentTarget.classList.contains('increase')) {
      // check if target contains the class name increase
      //console.log('hello count');
      count++;
    } else if (e.currentTarget.classList.contains('decrease')) {
      //console.log('bye count');
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = 'black';
    }
    //console.log(count);
    value.textContent = count;
  });
});
