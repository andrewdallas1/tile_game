class Cell {
  constructor(value) {
    this.value = value;

  }
    makeCell(i) {

      //console.log('trying to make cell');
      //for(let i = 1; i < this.value; i++){
        //let wrapper = document.querySelector('#wrapper');
        //let wrapDivs = document.createElement('div');
        let cellDiv = document.createElement('div');
        //wrapDivs.setAttribute('class', 'wrapDiv');
        cellDiv.setAttribute('class', 'cell');
        cellDiv.setAttribute('id', i)

        cellDiv.innerHTML = i;
        console.log(cellDiv);
        return cellDiv;
        //wrapper.appendChild(wrapDivs);
        //wrapDivs.appendChild(cellDiv);

    }
 }

 // let newCell = new Cell(9);

 // newCell.makeCell();
