# TILE GAME by Andrew Dallas
This game consists of a 3x3 grid containing eight numbers. Numbers are clicked and moved to the empty space of the board. You will win the game when all of the numbers are in the proper order.

## Technologies used:
-HTML5
-CSS
-Javascript

### My Code:
- Win logic.
```
if((document.getElementById('c0').parentNode) === boardDivs[0] &&
             (document.getElementById('c1').parentNode) === boardDivs[1] &&
             (document.getElementById('c2').parentNode) === boardDivs[2] &&
             (document.getElementById('c3').parentNode) === boardDivs[3] &&
             (document.getElementById('c4').parentNode) === boardDivs[4] &&
             (document.getElementById('c5').parentNode) === boardDivs[5] &&
             (document.getElementById('c6').parentNode) === boardDivs[6] &&
             (document.getElementById('c7').parentNode) === boardDivs[7]) {
            alert('winner');
          }
```
- Random cell placement
```
 fillBoard() {
    const boardDivs = document.getElementsByClassName('wrapDiv');


      for(let i = 0; i < boardDivs.length - 1; i++) {
        let cell = new Cell(3);
        let j = Math.floor(Math.random()*9);
        if (boardDivs[j].children.length === 0){
          boardDivs[j].appendChild(cell.makeCell(i));
          boardDivs[i] = false;
        //  console.log(boardDivs);
        //  wrapDivs.appendChild(cell);
        } else {
          i = i - 1;
        }
      }
  }
```

### My comments:
This project proved to be very challenging. I have gained a newfound respect for all levels of game developers. Even the most simple of games -when being converted into a programming language- turn out to be very complicated.

### Author
- Andrew Dallas








