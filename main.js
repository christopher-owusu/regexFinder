let text = `
  
Hi there!
We are excited to welcome you to our online platform! You have been added as a Student.
Below is your password and Student id. Click on the claim button to get started.

Generated password: mM2]e]kc Login
 Student ID is ST237814.

Best regards,





    Claim Account
 `;

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:<>|./?]).{8,}$/;
let elements = text.split(/\s+/);

for (let i = 0; i < elements.length; i++) {
  let element = elements[i].trim();
  
  if (regex.test(element)) {
    // Element matches the regex pattern
    if(element.length === 8){
        console.log('Found matching element:', element);
    }
    // Perform desired actions on the element
  }
}
