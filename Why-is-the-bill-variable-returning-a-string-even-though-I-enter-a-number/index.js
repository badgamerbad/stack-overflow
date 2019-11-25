document.querySelector('#persons').addEventListener('change', (update));
document.querySelector('#bill').addEventListener('change', (update));
document.querySelector('#percent').addEventListener('change', (update));

let values = {
    persons: 0,
    bill: 0,
    percent: 0,
}
function update(event) {
    values[event.currentTarget.id] = event.target.valueAsNumber;
    findresult();
}

function findresult() {
  var persons = values["persons"];
  var bill = values["bill"];
  var percent = values["percent"];

  var tip = (bill * percent) / 100;
  var tip_person = tip / persons;
  var total = bill + tip;
  console.log(tip);
  console.log(tip_person);
  console.log(total);
}