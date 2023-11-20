let tasks: string[] = [];
let inputBtn: HTMLButtonElement = document.getElementById("inputBtn") as HTMLButtonElement;
let refreshBtn: HTMLButtonElement = document.getElementById("refreshBtn") as HTMLButtonElement;
let table: HTMLTableElement = document.getElementById("table") as HTMLTableElement;
let checkbox: HTMLInputElement;

function addTask() {
    let sus = document.getElementById("taskInput") as HTMLInputElement;
    tasks.push(sus.value);
    var hrow = <HTMLTableRowElement> table.insertRow(0);
    var cell = hrow.insertCell(0);
    cell.innerHTML = sus.value;
    cell = hrow.insertCell(1);
    cell.innerHTML = "<input type='checkbox'>";
    sus.value = "";
}

function printTasks() {
    console.log(tasks);
}

inputBtn.addEventListener('click', function (event) {
    addTask();
})

refreshBtn.addEventListener('click', function (event) {
    printTasks();
})