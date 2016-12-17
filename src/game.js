class Game {
  constructor(value) {
    this.value = value;

  }
  startGame() {
    let board = new Board(4);

    board.makeBoard();
    board.fillBoard();

  }
  findEmpty(){
    let boardDivs = document.getElementsByClassName('wrapDiv');
    for(let i = 0; i < boardDivs.length; i++) {
      if (boardDivs[i].children.length === 0){
        var emptyDiv = boardDivs[i];
        return emptyDiv;
      }
      console.log(emptyDiv);
    }
  }


  clickMove(findEmpty) {
    let numDivs = document.getElementsByClassName('cell');
    //console.log(numDivs);
     let boardDivs = document.getElementsByClassName('wrapDiv');
    //let emptyBoard = document.querySelector('boardDivs.children.length === 0')
    //console.log(boardDivs[0].children.length);
    // for(let i = 0; i < boardDivs.length; i++) {
    //   if (boardDivs[i].children.length === 0){
    //     var emptyDiv = boardDivs[i];
    //   }
    //   console.log(emptyDiv);
    // }
    for(let i = 0; i < boardDivs.length; i++) {
      if (boardDivs[i].children.length === 0){
        var emptyDiv = boardDivs[i];
      };
      console.log(emptyDiv);
    };


     for(let i = 0; i < boardDivs.length - 1; i++) {
        let numDivs = document.getElementsByClassName('cell');
          numDivs[i].addEventListener('click', function() {
            console.log(numDivs[i]);

          let clickedParent = (numDivs[i].parentNode);
          console.log(numDivs[i]);
          console.log(clickedParent)
          var clickedNum = numDivs[i];
          emptyDiv.appendChild(clickedNum);

          emptyDiv = clickedParent;
           console.log(numDivs[i]);

          console.log(emptyDiv);




      });
          //emptyFunc();
          //emptyDiv = this.findEmpty();

      };
        //var emptyDiv = this.findEmpty();

  };
    winner() {


    }
    //}
  };


let game1 = new Game();
game1.startGame();
game1.findEmpty();
game1.clickMove();

