//EXAMPLE 14
const sBubble = document.querySelector('.sBubble')
const pBubble = document.querySelector('.pBubble')
const aBubble = document.querySelector('.aBubble')
sBubble.addEventListener('click', function(e){
  e.stopPropagation()
  alert('SECTION ws clicked')
})
pBubble.addEventListener('click', function(e){
  e.stopPropagation()
  alert('PARAGRAPH ws clicked')
})
aBubble.addEventListener('click', function(){
  alert('LINK ws clicked')
})

//EXAMPLE 13
const qccURL = document.querySelector('#qccURL')
qccURL.addEventListener('click', function(e){
  e.preventDefault();
  alert('QCC website is off')
})

//EXAMPLE 12
const toTop =document.querySelector('.toTop')
window.addEventListener('scroll', function(){
  let pxTop = window.pageYOffset;
  if(pxTop>80){
    toTop.style.display ='block';
  }
  else{
    toTop.style.display = "none";
  }
})

//EXAMPLE 11  scroll event
const display9 = document.querySelector('.display9')
window.addEventListener('scroll', function(){
  let pxTop = window.pageYOffset;
  display9.innerHTML = `Browser window is ${pxTop} away from `
})

//EXAMPLE 10
const inputText = document.querySelector('.inputText')
inputText.addEventListener('keydown', function(e){alert(`Key ${e.key} was pressed!\n ASCI code for key "${e.key}" is ${e.which}`)
})

//EXAMPLE 9
const divColor = document.querySelectorAll('.divColor')
for(let eachDiv of divColor){
  eachDiv.addEventListener('mouseout', function(){
    eachDiv.style.backgroundColor = changeColor();
  })
}
//EXAMPLE 7
const colorContainer = document.querySelector('.colorContainer')
const btnColor = document.querySelector('#btnColor')

btnColor.addEventListener('click', function(){
  //change bg of the div
  colorContainer.style.backgroundColor = changeColor();
})
function changeColor(){
  //rgb goes from 0 to 255
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  return `rgb(${r},${g},${b})`
}

//EXAMPLE 6
const btn6 = document.querySelector('#btn6')
btn6.addEventListener('mouseout', click1)
btn6.addEventListener('dblclick', click2)

function click1(){
  alert('BUTTON 6 = mouseout')
}
function click2(){
  alert('BUTTON 6 was double clicked')
}

//EXAMPLE 5
const btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', function(){
  alert('BUTTON 5 was clicked')
})

//EXAMPLE 4
const title = document.querySelector('.title')
title.onmouseout = function(){
  console.log('The title was hovered on mouseout event')
}

//EXAMPLE 3
const qccLink = document.querySelector('#qccLink')
qccLink.onclick = function() {
  console.log('QCC link was clicked');
}

qccLink.onmouseover = testing;

function testing(){
  console.log('QCC link was hovered or mouseover');
}

//EXAMPLE 2
const btn2 = document.querySelector('#btn2')
btn2.onlick = function(){
  alert('Hi there!')
}
/* another way
function clickedBtn(){
  alert('Hi there')
}
.btn2.onclick = clickedBtn;
*/
