class Board {
  constructor(value) {
    this.value = value;
  }

  makeBoard(value) {

    for (let i = 0; i < this.value; i = i + 1) {

      const wrapper = document.querySelector('#wrapper');
      const wrapDivs = document.createElement('div');
      wrapDivs.setAttribute('id', 'b' + i)
      wrapDivs.setAttribute('class', 'wrapDiv');

      wrapper.appendChild(wrapDivs);
      }

  }

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

}


