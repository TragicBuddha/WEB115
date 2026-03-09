    // JavaScript code for form validation
	// Prevent form from submitting
    let form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

      // Retrieve the input field value
        let inputVariable = document.forms['myForm'].elements['inputField'].value;

      // Regular expression pattern for alphanumeric input
        let regex = /^[a-zA-Z0-9]*$/;

      // Check if the input value matches the pattern
        if (regex.test(inputVariable)) {
        // Valid input: display confirmation and submit the form
            window.alert('Valid format!');
            //form.submit if we really wanted to submit

        // Invalid input: display error message
        } else {
            window.alert('Invalid format!')
        }
    });