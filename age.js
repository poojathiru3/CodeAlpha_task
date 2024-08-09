function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        document.getElementById("result").innerText = "Please select a birthdate.";
        return;
    }

    var birthDate = new Date(birthdate);
    var today = new Date();

    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    var dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById("result").innerText = "You are " + age + " years old.";
}
