function onFormSubmit2() {
    let amount = document.getElementById("income_amount").value;
    let category = document.getElementById("income_category").value;
    let account = document.getElementById("account").value;
    let date = document.getElementById("today2").value;
    let check = document.getElementById("check2").value;

    let now = new Date();
    let submit_info = { amount, category, account, date, check };
    localStorage.setItem(now.toLocaleString(), JSON.stringify(submit_info));
}