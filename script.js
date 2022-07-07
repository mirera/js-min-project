
let userDetailsDatabase = { };


const userDetails = () => {

   

    // a function to validate username
    let userName = prompt('Enter your username');

    if(userName == null){
        return;
    }

    let validateUsername = userName => {
        if(userName.length > 0 && userName.length < 10){
            return true;
        } else {
            return false;
        }
    };
    //iterate till the username meets conditions 
    while (validateUsername(userName) == false) {
        userName = prompt('A username should be betwween 0 and 8 characters');
    };

    userDetailsDatabase['Username'] = userName;
    




    // a function to validate email

    let email = prompt('Enter your email');
    if(email == null){
        return;
    }

    let validateEmail = email => {
        //regex pattern for email validation
        const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        emailCheckResult = emailCheck.test(email);
        if(emailCheckResult == true){
            return true;
        } else{
            return false;
        }
    };

    //iterate till the username meets conditions 
    while  (validateEmail(email) == false) {
        email = prompt('Enter a correct email');
    }; 
    userDetailsDatabase['Email'] = email;


    

    // a function to validate phonenumber

    let phoneNumber = prompt('Enter your Phone Number');
    if(phoneNumber == null){
        return;
    }


    let validatePhoneNumber =  phoneNumber => {
        const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        phoneNumberCheckResult =  pattern.test(phoneNumber);
        if(phoneNumberCheckResult == true){
            return true;
        }else{
            return false;
        }
    };

    while  (validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt('Phone no. must have 10 digits');
    };

    userDetailsDatabase['Phone'] = phoneNumber; 



    // a function to validate password

    let password = prompt('Enter password'); 
    if(password == null){
        return;
    }

    let validatePassword = password => {
        const patternPattern=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        phoneNumberCheckResult =  patternPattern.test(password);
        if(phoneNumberCheckResult == true){
            return true;
        } else{
            return false;
        }
    };

    while  (validatePassword(password) == false) {
        password = prompt('A stroger password must have more than 4 characters with alphanumerics');
    }; 
     

    


    // a function to cofir password

    let confirmPassword = prompt('Confirm password');

    if(confirmPassword == null){
        return;
    }

    let validateConfirmPassword = confirmPassword => {
        if (confirmPassword != password){
            return false;
        } else{
            return true;
        }
    };

    while  (validateConfirmPassword(confirmPassword) == false) {
        confirmPassword = prompt('passwords do not match');
    }; 
    userDetailsDatabase['Password'] = confirmPassword;
    
    };


    // function to diplay user details on the screen
     let diplayUserDetails = () => {
        alert(`Your Details\n\n Username: ${userDetailsDatabase.Username}\n Email: ${userDetailsDatabase.Email}\n Phone no.: ${userDetailsDatabase.Phone}`);
     };
