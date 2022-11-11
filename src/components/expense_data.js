function onFormSubmit1() {
    let amount = document.getElementById("expense_amount").value;
    let category = document.getElementById("expense_category").value;
    let account = document.getElementById("account").value;
    let date = document.getElementById("today1").value;


    let now = new Date();
    let submit_info = { amount, category, account, date };
    localStorage.setItem(now.toLocaleString(), JSON.stringify(submit_info));

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = category;

    var td2 = document.createElement("td");
    td2.innerHTML = '-' + amount + '₽';

    var td3 = document.createElement("td");
    td3.innerHTML = account;

    var td4 = document.createElement("td");
    td4.innerHTML = date;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    var table = document.getElementById("history");
    table.appendChild(tr);

    localStorage.setItem('table', JSON.stringify(tr));
    // table = localStorage.getItem('table');
}

window.onload = function () {
    var table = document.getElementById("history");
    table.appendChild(localStorage.getItem('table'));
}