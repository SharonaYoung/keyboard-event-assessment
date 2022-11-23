// make an array of alphabet
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable to randomly select a letter
let secretLetter = '';
const randomLetter = () => {
  secretLetter = letters[Math.floor(Math.random() * 25)];
  console.log(secretLetter);
}
randomLetter();

// body event
const body = document.querySelector("body");
const list = document.querySelector("ol");
let letterPressed 

body.addEventListener('keydown', function(event){
  letterPressed = event.key;
  if(secretLetter === letterPressed){
    let li = document.createElement('li');
    li.innerText = `SECRET KEY PRESSED: ${secretLetter}`;
    list.append(li);
    randomLetter();
  }
})



// function ltr(){
//   document.body.addEventListener('keydown', function(event){
//     console.log(event.key);
//   })
// }
// ltr()

// document.body.addEventListener('keydown', function(event){
//   let letterPressed = event.key;
//   console.log(letterPressed);
//   // compare key pressed to random letter
//   if(randomLetter === letterPressed){
//     msg.textContent = "SECRET KEY PRESSED: " + letterPressed;
//     body.appendChild(msg);
//   }
// });