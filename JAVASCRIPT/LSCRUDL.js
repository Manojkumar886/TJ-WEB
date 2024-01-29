// validate form inputs before submitting data 
function validationForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if (name == "") {
        alert(" name is required");
        return false;
    }

    if (age == "") {
        alert(" age is Required");
        return false;
    }
    else if (age < 1) {
        alert(" age is must not be zero or less than zero");
        return false;
    }

    if (address == "") {
        alert(" address is Required");
        return false;
    }
    if (email == "") {
        alert(" age is Required");
        return false;
    }
    else if (!email.includes("@")) {
        alert("Invaild email address");
        return false;
    }

    return true;
}

// function to show data
function showData() {
    var peopleList = new Array();
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";

    peopleList.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deteleData(' + index + ')">DELETE</button><button onclick="updateData(' + index + ')">EDIT</button></td>';
        html += "</tr>";
    })
    document.querySelector('#crudTable tbody').innerHTML = html;
}

// load all data when document or page loaded
document.onload = showData();

// function to add data

function addData() {
    if (validationForm() == true) {
        // localStorage.removeItem("peopleList");
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        let peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
        peopleList.push({
            name: name,
            address: address,
            age: age,
            email: email,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));

        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";

    }
}