class Cell {
  constructor(value) {
    this.value = value;

  }
    makeCell(i) {


        let cellDiv = document.createElement('button');

        cellDiv.setAttribute('class', 'cell');
        cellDiv.setAttribute('id', 'c' + i)

        cellDiv.innerHTML = i;
        console.log(cellDiv);
        return cellDiv;


    }
 }

