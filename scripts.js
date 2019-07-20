const grid = [['']];
let rows = 1;
let columns = 1;

const addRow = () => {
    grid.push((new Array(columns)).fill(''));
    rows++;
}

const removeRow = () => {
    grid.pop();
    rows--;
}

const addColumn = () =>{
    grid.forEach(curEl => curEl.push(''));
    columns++;
}

const removeColumn = () => {
    grid.forEach(curEl => curEl.pop());
    columns--;
}

const getSelectedColor = () => {
    let colors = [...document.querySelectorAll('#colors div')]
    return colors.find((el) => el.classList.contains('selected')).id;
}

const renderGrid = () => {
    const griddiv = document.querySelector('#grid');
    [...document.querySelectorAll('.row')].forEach((row) => griddiv.removeChild(row));
    grid.forEach(el => {
        const curRow = griddiv.appendChild(document.createElement('div'));
        curRow.classList.add('row');
       el.forEach(cell => {
        const curCell = curRow.appendChild(document.createElement('div'));
        curCell.classList.add('cell');
        curCell.addEventListener('click')
       });
    });
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
