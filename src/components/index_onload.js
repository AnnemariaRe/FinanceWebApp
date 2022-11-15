window.onload = function () {
    //localStorage.clear();
    const submits = { ...localStorage };

    var i = 0;
    for (let submit in submits) {
        if (i > 6) { break; }
        if (submit.endsWith("acc")) { continue; }
        let submit_info = JSON.parse(localStorage[submit]);
        document.getElementById("main").innerHTML += generateSubmit(submit_info);
        i++;
    }

    for (let submit in submits) {
        if (submit.endsWith("acc")) { 
            let submit_info = JSON.parse(localStorage[submit]);
            document.getElementById("account1").innerHTML += 
                    "<option>" + submit_info.name + " (" + submit_info.type + ") </option>";
            document.getElementById("account2").innerHTML += 
                    "<option>" + submit_info.name + " (" + submit_info.type + ") </option>";  
        }
    }
}

function generateSubmit(submit_info) {
    var tr = "<tr>";
    tr += "<td>" + submit_info.category + "</td>";
    if (submit_info.check == "+") {
        tr += "<td>+" + submit_info.amount + "</td>";
    } else {
        tr += "<td>-" + submit_info.amount + "</td>";
    }
    tr += "<td>" + submit_info.account + "</td>";
    tr += "<td>" + submit_info.date + "</td></tr>";

    return tr;
}