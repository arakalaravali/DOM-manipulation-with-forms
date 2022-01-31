let SelectedRow = null;
function onFormSubmit() {
    var FormData = readFormData();
    if (SelectedRow == null) insertNewRecord(FormData);
    else updateRecord(FormData);
    resetForm();

}
function readFormData() {
    const FormData = {};
    FormData["firstname"] = document.getElementById("firstname").value;
    FormData["lastname"] = document.getElementById("lastname").value;
    FormData["address"] = document.getElementById("address").value;
    FormData["pincode"] = document.getElementById("pincode").value;
    FormData["gender"] = document.getElementById("gender").value;
    FormData["food"] = document.getElementById("food").value;
    FormData["state"] = document.getElementById("state").value;
    FormData["country"] = document.getElementById("country").value;
     
    return FormData;
    console.log(FormData)
}
function insertNewRecord(data) {
    let table = document.getElementById("employeelist")
        .getElementsByTagName("tbody")[0];
    // insert row
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pincode;
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = data.gender;
    cell3 = newRow.insertCell(5);
    cell3.innerHTML = data.food;
    cell3 = newRow.insertCell(6);
    cell3.innerHTML = data.state;
    cell3 = newRow.insertCell(7);
    cell3.innerHTML = data.country;

}
// reset functionality
function resetForm() {
    document.getElementById("firstname").value = " ";
    document.getElementById("lastname").value = " ";
    document.getElementById("pincode").value = " ";
    document.getElementById("address").value = " ";
    document.getElementById("gender").value = " ";
    document.getElementById("food").value = " ";
    document.getElementById("state").value = " ";
    document.getElementById("country").value = " ";
    SelectedRow = null;
}
// update record
function updateRecord(FormData) {
    SelectedRow.cells[0].innerHTML = FormData.firstname;
    SelectedRow.cells[1].innerHTML = FormData.lastname;
    SelectedRow.cells[2].innerHTML = FormData.address;
    SelectedRow.cells[3].innerHTML = FormData.pincode;
    SelectedRow.cells[4].innerHTML = FormData.gender;
    SelectedRow.cells[5].innerHTML = FormData.food;
    SelectedRow.cells[6].innerHTML = FormData.state;
    SelectedRow.cells[7].innerHTML = FormData.country;
}