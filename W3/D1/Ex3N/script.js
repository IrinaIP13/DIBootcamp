createCalendar(2023, 6);

function createCalendar(year, month) {
dateCal = new Date(year,month-1,1);
const tableCal = document.createElement('table');
tableCal.style.width = '500px';
tableCal.innerHTML =  `
<thead>
    <tr>
        <th>MO</th>
        <th>TU</th>
        <th>WE</th>
        <th>TH</th>
        <th>FR</th>
        <th>SA</th>
        <th>SU</th>
    </tr>
</thead>
<tbody>
</tbody>
`
document.body.appendChild(tableCal);
createMonth(dateCal);
}

function createMonth(date) {
let toDay = date.getDay();
let week = [];
// 1 week
toDay==0 ? week = createEmptyCells(6) : week = createEmptyCells(toDay-1);
createWeek(week, date);

// weeks
week = [];
createWeek(week, date);

const saveMonth = date.getMonth();    
while (date.getMonth()==saveMonth){
week = [];
createWeek(week, date);
}

// last week
const allRows = document.getElementsByTagName('tr');
let lastRow = allRows[allRows.length-1];
for (let i = 0; i < 7; i++) {   
    if (lastRow.children[i].textContent<7) 
    lastRow.children[i].textContent = '.';
}

}

function createWeek(week, date) {
    let tdCal;
    for (let i = week.length; i < 7; i++) {
        tdCal = document.createElement('td');
        tdCal.textContent = date.getDate();
        week[i] = tdCal;
        date.setDate(date.getDate()+1);
    }
    insertWeek(week);
}

function insertWeek(w) {
    let newTr = document.createElement('tr');
    document.querySelector('tbody').appendChild(newTr);
    let allWeeks = document.querySelectorAll('tr');
    for (let y = 0; y < w.length; y++) {
        allWeeks[allWeeks.length-1].insertAdjacentElement('beforeend', w[y]);
    };
}

function createEmptyCells(n) {
    let cell = [];
    let newCell;
    for (let i = 0; i < n; i++) {
        newCell = document.createElement('td');
        newCell.textContent = '.';
        cell[i] = newCell;
    } return cell
}