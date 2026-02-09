document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();   

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let age = document.getElementById("age").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("ageError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    if (age === "" || age <= 0) {
        document.getElementById("ageError").innerText = "Enter valid age";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});
