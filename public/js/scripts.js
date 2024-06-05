function validateForm(event) {
    event.preventDefault();
}

const name = document.getElementById('name').value;
const surname = document.getElementById('surname').value;
const password = document.getElementById('pass').value;
const email = document.getElementById('mail').value;


const nameSurnameRegex = /^.{3,}$/;
    const passwordRegex = /^(?=.[0-9])(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;
    
