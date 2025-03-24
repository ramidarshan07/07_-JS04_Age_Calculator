const dateInput = document.getElementById('birthdate');
const todayDate = new Date().toISOString().split("T")[0];
const ageBtn = document.querySelector("#calculateBtn");
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

dateInput.setAttribute("max", todayDate);

ageBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const birthdate = dateInput.value;

    resultDiv.textContent = 'Your Age is:';
    errorDiv.textContent = '';

    if (!birthdate) {
        errorDiv.textContent = "Please enter your birth date.";
        return;
    }

    if (birthdate > todayDate) {
        errorDiv.textContent = "The birthdate cannot be in the future.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDateObj.getFullYear();
    let months = currentDate.getMonth() - birthDateObj.getMonth();
    let days = currentDate.getDate() - birthDateObj.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.textContent = `You are ${years} year${years >= 1 ? 's' : ''}, ${months} month${months >= 1 ? 's' : ''} old.`;
});
