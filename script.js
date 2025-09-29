const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("form");

function isOnlyDigits(value) {
    return value.length === 10 && !isNaN(value);
};

function validateInputs() {
    let isValid = true;
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("pnum").value.trim();
    const message = document.getElementById("message").value.trim();

    // First Name
    let condition1 = /^[a-zA-Z]{2,}$/.test(fname);
    if (fname.length <= 2) {
        console.log("Fill your First name");
        isValid = false;
    } else if (!condition1) {
        console.log("First name can only contain A-Z or a-z characters");
        isValid = false;
    } else {
        console.log("First name ok");
        isValid = true;
    };

    // Last Name
    let condition2 = /^[a-zA-Z]{2,}$/.test(lname);
    if (lname.length <= 2) {
        console.log("Fill your Last name");
        isValid = false;
    } else if (!condition2) {
        console.log("Last name can only contain A-Z or a-z characters");
        isValid = false;
    } else {
        console.log("Last name ok");
        isValid = true;
    };

    // Email
    (email.length === 0 || !email.includes("@") || !email.includes(".") || email.indexOf("@") < 2 ||
        email.lastIndexOf(".") - email.indexOf("@") <= 2 || email.length - email.lastIndexOf(".") <= 2)
        ? (console.log("Enter a valid email"), isValid = false)
        : (console.log("email ok"), isValid = true);

    // Phone number
    (!isOnlyDigits(phone))
        ? (console.log("Enter valid phone number"), isValid = false) : (console.log("number ok"), isValid = true);
        
    // Gender
    (!document.querySelector('input[name="gender"]:checked'))
        ? (console.log("Select your gender"), isValid = false) : (console.log("gender done"), isValid = true);

    // Message
    (message.length === 0)
        ? (console.log("Message is required"), isValid = false) : (console.log("message ok"), isValid = true);
    
    return isValid;
};
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateInputs()) {
        alert("Form submitted successfully!");
        form.reset();
    } else {
        alert("Fill the details!")
    };
});