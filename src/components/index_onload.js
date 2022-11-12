window.onload = function () {
    // localStorage.clear();
    const submits = { ...localStorage };

    var i = 0;
    console.log(submits);
    console.log(localStorage.getItem(10000 - localStorage.length + 1 + "tr"));
    for (let submit in submits) {
        if (i > 6) { break; }
        if (submit.endsWith("acc")) { continue; }
        let submit_info = JSON.parse(localStorage[submit]);
        document.getElementById("main").innerHTML += generateSubmit(submit_info);
        i++;
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