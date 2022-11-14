function generateData() {
    const submits = { ...localStorage };

    var accounts = [];
    for (let submit in submits) {
        if (submit.endsWith("acc")) { 
            let submit_info = JSON.parse(localStorage[submit]);
            accounts += submit_info.name + " (" + submit_info.type + ")";
            console.log(accounts);
        }
    }

    return accounts;
}