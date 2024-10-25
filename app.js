var resumeForm = document.querySelector("#cv-form");
var resumeOutput = document.querySelector("#resume-output");
var editBtn = document.querySelector("#edit-btn");
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    resumeOutput.style.display = "block";
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }
    document.getElementById("resumeName").innerText = "Name: ".concat(name.value);
    document.getElementById("resumeEmail").innerText = "Email: ".concat(email.value);
    document.getElementById("resumePhone").innerText = "Phone: ".concat(phone.value);
    document.getElementById("resumeEducation").innerText = "Education: ".concat(education.value);
    document.getElementById("resumeExperience").innerText = "Experience: ".concat(experience.value);
    document.getElementById("resumeSkils").innerText = "Skills: ".concat(skills.value);
});
// Edit Resume button functionality
editBtn === null || editBtn === void 0 ? void 0 : editBtn.addEventListener("click", function () {
    var _a, _b, _c, _d, _e, _f;
    resumeForm.style.display = "block"; // Show the form again
    resumeOutput.style.display = "none"; // Hide the resume output
    editBtn.style.display = "none"; // Hide the edit button
    // Repopulate the form with current resume data
    var name = (_a = document.getElementById("resumeName")) === null || _a === void 0 ? void 0 : _a.innerText.split(': ')[1];
    var email = (_b = document.getElementById("resumeEmail")) === null || _b === void 0 ? void 0 : _b.innerText.split(': ')[1];
    var phone = (_c = document.getElementById("resumePhone")) === null || _c === void 0 ? void 0 : _c.innerText.split(': ')[1];
    var education = (_d = document.getElementById("resumeEducation")) === null || _d === void 0 ? void 0 : _d.innerText;
    var experience = (_e = document.getElementById("resumeExperience")) === null || _e === void 0 ? void 0 : _e.innerText;
    var skills = (_f = document.getElementById("resumeSkils")) === null || _f === void 0 ? void 0 : _f.innerText;
    // Set the form inputs to these values
    document.getElementById("name").value = name !== null && name !== void 0 ? name : '';
    document.getElementById("email").value = email !== null && email !== void 0 ? email : '';
    document.getElementById("phone").value = phone !== null && phone !== void 0 ? phone : '';
    document.getElementById("education").value = education !== null && education !== void 0 ? education : '';
    document.getElementById("experience").value = experience !== null && experience !== void 0 ? experience : '';
    document.getElementById("skills").value = skills !== null && skills !== void 0 ? skills : '';
});
