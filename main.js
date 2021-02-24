let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';
document.querySelector('html').addEventListener('click', function() {});
let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('Veillez saisir votre nom.' );
    localStorage.setItem('nom', myName) ;
    myHeading.textContent = 'Le site de Victor est cool, ' + myName;
}
if (!localStorage.getItem('nom') )  {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'le site de victor est cool.' + storedName;
}