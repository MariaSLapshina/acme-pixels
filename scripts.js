const grid = [['']];
let rows = 1;
let columns = 1;

const addRow = (columns) => {
grid.push((new Array(columns)).fill(''));
}

const removeRow = () => {
    grid.pop();
}

const addColumn = () =>{
    grid.forEach(curEl => curEl.push(''));
}

const removeColumn = () => {
    grid.forEach(curEl => curEl.pop());
}
