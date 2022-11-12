window.onload = function () {
    // localStorage.clear();
    const submits = { ...localStorage };

    for (let submit in submits) {
        let submit_info = JSON.parse(localStorage[submit]);
        document.getElementById("tbody").innerHTML += generateSubmit(submit_info);
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