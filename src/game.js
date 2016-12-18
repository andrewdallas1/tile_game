class Game {
  constructor(value) {
    this.value = value;

  }
  startGame() {
    let board = new Board(4);

    board.makeBoard();
    board.fillBoard();

  }
  // findEmpty(){
  //   let boardDivs = document.getElementsByClassName('wrapDiv');
  //   for(let i = 0; i < boardDivs.length; i++) {
  //     if (boardDivs[i].children.length === 0){
  //       var emptyDiv = boardDivs[i];
  //       //return emptyDiv;
  //     }
  //     console.log(emptyDiv);
  //   }
  // }


  clickMove() {
    let numDivs = document.getElementsByClassName('cell');
     let boardDivs = document.getElementsByClassName('wrapDiv');

      if (boardDivs[0].children.length === 0){
        var emptyDiv = boardDivs[0];
      } else if(boardDivs[1].children.length === 0) {
        var emptyDiv = boardDivs[1];
      } else if(boardDivs[2].children.length === 0) {
        var emptyDiv = boardDivs[2];
      } else {
        var emptyDiv = boardDivs[3];
      }
      console.log(emptyDiv);



     for(let i = 0; i < numDivs.length; i++) {
          numDivs[i].addEventListener('click', function() {
          let clickedParent = (numDivs[i].parentNode);
          let clickedNum;
          if (numDivs[i] === numDivs[0]) {
           clickedNum = numDivs[0];
        } else if (numDivs[i] === numDivs[1]){
           clickedNum = numDivs[1];
        } else {
            clickedNum = numDivs[2];
        }
        console.log(clickedNum);

          emptyDiv.appendChild(clickedNum);

           emptyDiv = clickedParent;



           //console.log(numDivs[i]);

          console.log(emptyDiv);


          let parent0 = (document.getElementById('b0'));
          let parent1 = (document.getElementById('b1'));
          let parent2 = (document.getElementById('b2'));

          if((document.getElementById('c0').parentNode) === boardDivs[0] &&
             (document.getElementById('c1').parentNode) === boardDivs[1] &&
             (document.getElementById('c2').parentNode) === boardDivs[2]) {
            alert('winner');
          }







      });

          //emptyFunc();
          //emptyDiv = this.findEmpty();

      };

        //var emptyDiv = this.findEmpty();

  };
  //   winner() {
  //     let boardDivs = document.getElementsByClassName('wrapDiv');
  //     console.log(boardDivs);
  //     let numDivs = document.getElementsByClassName('cell');
  //     //for(let i = 0; i < boardDivs.length; i++)
  //     if((numDivs[0].parentNode) === boardDivs[0] &&
  //         (numDivs[1].parentNode) === boardDivs[1] &&
  //         (numDivs[2].parentNode) === boardDivs[2]) {
  //           alert('winner');

  //   }
  //   //}
  // };
}

let game1 = new Game();
game1.startGame();
//game1.findEmpty();
game1.clickMove();
//game1.winner();


