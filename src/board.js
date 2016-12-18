class Board {
  constructor(value){
    this.value = value;
  }

  makeBoard(value) {
    //this.cellBoard = new Cell(8);
    //this.cellBoard.makeCell(8);
    for(let i = 0; i < this.value; i++){
      //let cell = new Cell(value);
      //cell.makeCell();
      let wrapper = document.querySelector('#wrapper');
      let wrapDivs = document.createElement('div');
      wrapDivs.setAttribute('id', 'b' + i)
      wrapDivs.setAttribute('class', 'wrapDiv');

      wrapper.appendChild(wrapDivs);
      //wrapDivs.appendChild(cell);
    }


  }
  fillBoard() {
      //let wrapDivs = document.createElement('div');
      let boardDivs = document.getElementsByClassName('wrapDiv');


      for(let i = 0; i < boardDivs.length -1 ; i++) {
        let cell = new Cell(3);
        //let boardDivs[i] = true;
        let j = Math.floor(Math.random()*4);

      //console.log(cell);
      if(boardDivs[j].children.length === 0){
        boardDivs[j].appendChild(cell.makeCell(i));
        boardDivs[i] = false;
        //console.log(boardDivs);
        //wrapDivs.appendChild(cell);
      } else {
        i = i - 1;
      }
      }
    }

}

 // let board = new Board(9);

 // board.makeBoard(9);
 // board.fillBoard();

