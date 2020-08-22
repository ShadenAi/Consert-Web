// For the menu
const burger = document.querySelector('.burger');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

// Open and close menu
burger.addEventListener('click', () => {
    burger.classList.toggle("rotate1");
    ul.classList.toggle("open");
    li.forEach(li => {
        li.classList.toggle("fade");
    });
});



// For the form
const name = document.getElementById('name');
const email = document.getElementById('email');
const list = document.getElementById('ticket');
const quantity = document.getElementById('quantity');
const form = document.getElementById('form');
const errorMsg = document.getElementsByClassName('.errorMsg');
const h2 = document.getElementsByTagName('h2');

//Check form validation
form.addEventListener('submit', (e)=>{
    if(form.ticket.value === 'default'){
        e.preventDefault();
        alert('Please Choose A Ticket');
        form.ticket.style.borderColor = 'red';
        return false;
    }
    if(name.value === '' || name.value == null){
        e.preventDefault();
        alert('Please Enter Your Name');
        name.style.borderColor = 'red';
        return false;
    }
    if(email.value === '' || email.value == null){
        e.preventDefault();
        alert('Please Enter Your Email');
        email.style.borderColor = 'red';
        return false;
    }
    if(quantity.value === '' || quantity.value < 1){
        e.preventDefault();
        alert('Please choose how many ticket you want');
        quantity.style.borderColor = 'red';
        return false;
    }
    if(quantity.value > 10){
        e.preventDefault();
        alert('You can\'t buy more than 10 ticket');
        quantity.style.borderColor = 'red';
        return false;
    }
    alert('THANK YOU, HAVE FUN !');
    return true;

});

// Remove the red boarder
name.addEventListener('blur', ()=>{
    name.style.borderColor = '';
});
email.addEventListener('blur', ()=>{
    email.style.borderColor = '';
});
form.ticket.addEventListener('blur', ()=>{
    form.ticket.style.borderColor = '';
});
quantity.addEventListener('blur', ()=>{
    quantity.style.borderColor = '';
});




// Images slider
let images = ['./img/slide1.jpg', './img/slide2.jpg', './img/slide3.jpg', './img/slide4.jpg'];
let current = 0;
let imgs = document.getElementById('img');

setInterval(slider, 2000);

// Slide function
function slider() {

  if (current < images.length) {
    current++;
  } else {
    current = 1;
  }
    imgs.innerHTML = "<img src=" + images[current - 1] + ">";
}



