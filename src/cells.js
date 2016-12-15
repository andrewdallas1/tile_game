class Cells {
  constructor(value) {
    this.value = value;

  }
    makeCell() {
      for(let i = 0; i < this.value.length; i++){
        document.getElementsByClassName('.row div').innerHTML = 'i';
      }
    }
}


let newCells = new Cells(7);

newCells.makeCell(7);
