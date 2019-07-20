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
    console.log(grid);
});
document.querySelector('#removeRow').addEventListener('click', ev => {
    removeRow();
    console.log(grid);
});
document.querySelector('#addCol').addEventListener('click', ev => {
    addColumn();
    console.log(grid);
});
document.querySelector('#removeCol').addEventListener('click', ev => {
    removeColumn();
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

const renderGrid = () => {
    
}

