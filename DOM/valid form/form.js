document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let errors = {
        name: name === "" ? "Name is required" : "",
        email: email === "" ? "Email is required" 
             : !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email) ? "Enter a valid email" : "",
        password: password.length < 6 ? "Password must be at least 6 characters" : ""
    };

    Object.keys(errors).forEach(field => {
        document.getElementById(field + "Error").textContent = errors[field];
    });

    Object.values(errors).every(error => error == "") && (alert("Form submitted successfully!"), this.reset());
});

document.getElementById("myForm").addEventListener("reset", function() {
    ["nameError", "emailError", "passwordError"].forEach(id => document.getElementById(id).textContent = "");
});


    
