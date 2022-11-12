function onFormSubmit1() {
    let amount = document.getElementById("expense_amount").value;
    let category = document.getElementById("expense_category").value;
    let account = document.getElementById("account").value;
    let date = document.getElementById("today1").value;
    let date1 = document.getElementById("today1").value;
    let check = document.getElementById("check1").value;

    let now = new Date();
    let submit_info = { amount, category, account, date, date1, check };
    localStorage.setItem(now.toLocaleString(), JSON.stringify(submit_info));
}