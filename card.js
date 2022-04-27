// מערך
let cards= ["rick1.webp","rick2.webp","rick3.webp","rick4.webp","rick5.webp","rick6.webp","rick7.webp","rick8.webp",]

// מכפיל מערך ומערבב קלפים
   let newarray= concatarray(cards)
        newarray = shuffle(newarray);

//  יצירת לוח משחק ואלמנטים
let board = document.getElementById("board")
let win =document.getElementById("win")
win.classList.add("hidden")
let Fireworks =document.getElementById("Fireworks")
Fireworks.classList.add("Fireworkshidden")

// פונקציה ליצירת קלפים
function makecards(){
    for (i in newarray){
        let elem = document.createElement("div")
       elem.innerHTML += '<img class=card src=\"'+newarray[i]+'\" >' ;
        elem.className = (newarray[i])
         elem.onclick = click
         elem.setAttribute("id","card"+i )
        elem.classList.add("hidden")
        board.appendChild(elem)      
              }}
             
 // לחיצה על קלף
 let count =[] 
 let countid=[] 
 let Youwon=[]
 let click = (event) => {
 
 count.push(event.target.className);
 countid.push(event.target.id)
  event.target.classList.remove("hidden")
  console.log(countid[0]);
  let noclick1 = document.getElementById(countid[0]);
  console.log(noclick1);
  noclick1.onclick = ""
  
  // אם הקלפים תואמים
   for (i in count){
    if (count.length>=2 && count[0]==count[1]){
      new Audio("sf.mp3").play()
      Youwon=[...countid, ...Youwon]
        let noclick2 = document.getElementById(countid[1]);
        noclick2.onclick = ""
        if (Youwon.length==16){
          win.classList.remove("hidden")
          Fireworks.classList.remove("Fireworkshidden")
          new Audio("you-win.mp3").play()}
      count=[]
      countid=[] 
      
    }}
     
      // אם הקלפים לא תואמים
for (i in count){
  if (count.length>=2 && count[0]!==count[1]){
    new Audio("itsnot.mp3").play()
    let element = document.getElementById(countid[0]);
    setTimeout(()=>element.classList.add("hidden"),0700);
  setTimeout(()=>event.target.classList.add("hidden"),0700);
  noclick1.onclick = click
    count=[]
    countid=[] }}}

makecards()


// מערבב קלפים
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]; }
  return array;  }
  function concatarray(array){
      let newarray = [...array,...cards]
      return newarray}
    


        function aodio2 (){
          new Audio("intro.mp3").play()
        }