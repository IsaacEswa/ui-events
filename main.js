/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies

// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt
//1. ------------- FRONTEND LINK -------------
// Stap 1: querySelector
let frontendLink = document.querySelector('a[href="#frontend"]')

// Stap 2: addEventListener
frontendLink.addEventListener('click', scaleHandler)


// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function scaleHandler() {
  frontendLink.classList.toggle('scale')
}

// Stap 4: Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
frontendLink.addEventListener('animationend', scaleHandler)

//3. ------------- % LINK -------------
// Stap 1: querySelector
let andLink = document.querySelector('a[href="#and"]')

// Stap 2: addEventListener
andLink.addEventListener('click', translateHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function translateHandler() {
  andLink.classList.toggle('upanddown')
}

// Stap 4: Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
andLink.addEventListener('animationend', translateHandler)


//4. ------------- DEVELOPMENT -------------
// Stap 1: querySelector
let developmentLink = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener
developmentLink.addEventListener('dblclick', shakeHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function shakeHandler() {
  developmentLink.classList.toggle('shake')
}

// Stap 4: Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
developmentLink.addEventListener('animationend', shakeHandler);

//5. ------------- SPRINT 5 -------------
// Stap 1: querySelector
let sprintLink = document.querySelector('a[href="#sprint-5"]')

// Stap 2: addEventListener
sprintLink.addEventListener('focusin', bgColorHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function bgColorHandler() {
  sprintLink.classList.toggle('focus-color')
}

// Stap 4: Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
sprintLink.addEventListener('focusout', bgColorHandler);

//6. ------------- FIX -------------
// Stap 1: querySelector
let fixLink = document.querySelector('a[href="#fix"]')

// Stap 2: addEventListener Pointer erop
fixLink.addEventListener('pointerover', showHoverText)
// addEventListener Pointer eraf
fixLink.addEventListener('pointerout', showOriginalText)

// Stap 3: (Callback functie met) textContent aanpassen
function showHoverText() {
  fixLink.textContent = "Fixed!"
}

// (Callback functie met) textContent terug veranderen
function showOriginalText() {
  fixLink.textContent = "Fix"
}

// 7. ------------- THE -------------
// Stap 1: querySelector
let theLink = document.querySelector('a[href="#the"]')

// Stap 2: addEventListener Pointer eraf
theLink.addEventListener('pointerout', rotateHandler)

// Stap 3: (Callback functie met) class toevoegen met toggle
function rotateHandler() {
  theLink.classList.toggle('the-rotate')
}

// Stap 4: Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
theLink.addEventListener('animationend', rotateHandler);