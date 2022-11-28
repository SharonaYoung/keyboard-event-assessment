// make an array of alphabet
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable to randomly select a letter
let secretLetter = '';
const randomLetter = () => {
  secretLetter = letters[Math.floor(Math.random() * 26)];
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