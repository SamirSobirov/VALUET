let add_w = document.querySelector('.add_w')

add_w.onclick = () => {
    location.assign('/pages/add_tr/')
}
let transactions = document.querySelector(".transactions");
function transictions(arr) {
  arr.forEach((item) => {
    let transaction = document.createElement("div");
    let date = document.createElement("p");
    let currency = document.createElement("img");
    let id = document.createElement("p");
    let sum = document.createElement("p");
    let statusBox = document.createElement("div");
    let status = document.createElement("p");

    transaction.classList.add("transaction");
    statusBox.classList.add("statusBox");
    date.innerHTML = item.trans.date
    currency.innerHTML = item.trans.total
    id.innerHTML = item.id
    sum.innerHTML = item.trans.total
    status.innerHTML = "Successful";
    statusBox.append(status);
    transaction.append(date, currency, id, sum, statusBox);
    transactions.append(transaction);
  });
}

fetch("http://localhost:7300/transictions")
  .then((res) => res.json())
  .then((res) => transictions(res));