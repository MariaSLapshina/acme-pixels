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

document.querySelector('#addRow').addEventListener('click', ev => {
    addRow();
    renderGrid();
});
document.querySelector('#removeRow').addEventListener('click', ev => {
    removeRow();
    renderGrid();
});
document.querySelector('#addCol').addEventListener('click', ev => {
    addColumn();
    renderGrid();
});
document.querySelector('#removeCol').addEventListener('click', ev => {
    removeColumn();
    renderGrid();
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

const renderGrid = () => {
    grid.forEach(el => {
        const griddiv = document.querySelector('#grid');
        const curRow = griddiv.appendChild(document.createElement('div'));
        curRow.classList.add('row');
       el.forEach(cell => {
        const curCol = curRow.appendChild(document.createElement('div'));
        curCol.classList.add('cell');
       })
    })
}

renderGrid();