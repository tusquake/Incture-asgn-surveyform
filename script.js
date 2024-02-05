function submitForm() {
    const name = document.getElementById('name').value;
    document.getElementById('submitName').innerText = name;

    const email = document.getElementById('email').value;
    document.getElementById('submitEmail').innerText = email;

    const phone = document.getElementById('phone').value;
    document.getElementById('submitPhone').innerText = phone;

    const gender = document.getElementById('gender').value;
    document.getElementById('submitGender').innerText = gender;

    const age = document.getElementById('age').value;
    document.getElementById('submitAge').innerText = age;

    const city = document.getElementById('city').value;
    document.getElementById('submitCity').innerText = city;

    const college = document.getElementById('college').value;
    document.getElementById('submitCollege').innerText = college;

    const fos = document.getElementById('fos').value;
    document.getElementById('submitfos').innerText = fos;

    
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('submitdetails').style.display = 'block';
  }
  
function confirmForm() {
    //to hide the form once user submits the form
    document.getElementById('surveyForm').style.display = 'none';
    //to hide the confirmdetails section once the form is submitted
    document.getElementById('submitdetails').style.display = 'none';

    // Show a success message on the screen

    //to create a new heading tag to show on the screen for successful registration
    const success = document.createElement('h1');
    //add the text to be shown
    success.innerText = 'Details Saved!✔';
    //add the color of the text
    success.style.color = 'blue'; 
    //add it to the body
    document.body.appendChild(success);
}