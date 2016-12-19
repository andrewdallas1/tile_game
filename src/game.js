class Game {
  constructor(value) {
    this.value = value;
  }
  startGame() {
    const board = new Board(9);

    board.makeBoard();
    board.fillBoard();
  }

  clickMove() {
    const numDivs = document.getElementsByClassName('cell');
     const boardDivs = document.getElementsByClassName('wrapDiv');
  for (let i = 0; i < boardDivs.length; i++) {
    if (boardDivs[i].children.length === 0) {
      var emptyDiv = boardDivs[i];


  }
      console.log(emptyDiv);

      for(let i = 0; i < numDivs.length; i++) {
          numDivs[i].addEventListener('click', function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            console.log(target.parentNode);

            var clickedNum = target;
            let clickedParent = target.parentNode;
            emptyDiv.appendChild(clickedNum);
            emptyDiv = clickedParent;

          let parent0 = (document.getElementById('b0'));
          let parent1 = (document.getElementById('b1'));
          let parent2 = (document.getElementById('b2'));

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
      });
      };
  }
  };
}

let game1 = new Game();
game1.startGame();
game1.clickMove();


