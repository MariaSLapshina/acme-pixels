const grid = localStorage.getItem('gridArray') ? JSON.parse(localStorage.getItem('gridArray')) : [['']];
let rows = localStorage.getItem('rows') ? localStorage.getItem('rows') * 1 : 1;
let columns = localStorage.getItem('columns') ? localStorage.getItem('columns') * 1 : 1;

const addRow = () => {
    grid.push((new Array(columns)).fill(''));
    rows++;
}

const removeRow = () => {
    if (rows > 1) {
        grid.pop();
        rows--;
    }
    
}

const addColumn = () =>{
    grid.forEach(curEl => curEl.push(''));
    columns++;
}

const removeColumn = () => {
    if (columns > 1) {
        grid.forEach(curEl => curEl.pop());
        columns--;
    }
    
}

const getSelectedColor = () => {
    let colors = [...document.querySelectorAll('#colors div')]
    return colors.find((el) => el.classList.contains('selected')).id;
}


const addColor = (row,column) => {
    if (grid[row][column] === getSelectedColor()) {
        grid[row][column] = '';
    } else {
        grid[row][column] = getSelectedColor();
    }
}

const renderGrid = () => {
    const griddiv = document.querySelector('#grid');
    [...document.querySelectorAll('.row')].forEach((row) => griddiv.removeChild(row));
    grid.forEach((el,rowIdx) => {
        const curRow = griddiv.appendChild(document.createElement('div'));
        curRow.classList.add('row');
       el.forEach((cell,colIdx) => {
        const curCell = curRow.appendChild(document.createElement('div'));
        curCell.classList.add('cell');
        curCell.addEventListener('click',ev =>{
            addColor(rowIdx,colIdx);
            renderGrid();
        })
        curCell.style.backgroundColor = grid[rowIdx][colIdx];
       });
    });
    localStorage.setItem('gridArray', JSON.stringify(grid));
    localStorage.setItem('rows', rows);
    localStorage.setItem('columns', columns);
}

document.querySelector('#addRow').addEventListener('click', ev => {
    addRow();
    renderGrid();
    console.log(grid);
});
document.querySelector('#removeRow').addEventListener('click', ev => {
    removeRow();
    renderGrid();
    console.log(grid);
});
document.querySelector('#addCol').addEventListener('click', ev => {
    addColumn();
    renderGrid();
    console.log(grid);
});
document.querySelector('#removeCol').addEventListener('click', ev => {
    removeColumn();
    renderGrid();
    console.log(grid);
});

const allColors = [...document.querySelectorAll('#colors *')];

allColors.forEach((colorDiv) => {
    colorDiv.addEventListener('click', (ev) => {
        allColors.forEach((color) => {
            color.classList.remove('selected');
        });
        ev.target.classList.add('selected');
    });
});

renderGrid();
