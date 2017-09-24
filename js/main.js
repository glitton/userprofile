$(document).ready(function(){
  console.log('document loaded');
  // hide new profile confirmation before user completes the form 
  document.getElementById('new-user-div').style.display = 'none';
  console.log('new user div is hidden');

  //Add event listener to button with id="creat-profile"
  document.getElementById('create-profile').addEventListener('click', getUserInfo, false);


  // // function to get users profile info 
  function getUserInfo() {
    console.log('getUserInfo function invoked');
    // store values for user profile details
    var firstName = document.getElementById('firstName').value;
    var lastName  = document.getElementById('lastName').value;
    var email     = document.getElementById('email').value;
    var phone     = document.getElementById('phone').value;
    // console.log(firstName,lastName,email, phone);

    // Div that displays a message if user doesn't input data
    var message = document.getElementById('message');

    // First Name
    if(firstName === "") {
      // add a class of no-input to message if user forgets to input value
      message.className = "no-input";
      // update the text content of message
      message.textContent = "Please add your first name";
      // stop function if no answer
      return;
    };

    // Last Name
    if (lastName === "") {
      // add a class of no-input to message if user forgets to input value
      message.className = "no-input";
      // update the text content of message
      message.textContent = "Please add your last name";
      // stop function if no answer
      return;
    };

    // Email 
    if (email === "") {
      // add a class of no-input to message if user forgets to input value
      message.className = "no-input";
      // update the text content of message
      message.textContent = "Please add your email";
      // stop function if no answer
      return;
    };

    // Phone
    if (phone === "") {
      // add a class of no-input to message if no user phone value
      message.className = "no-input";
      // update the text content of message
      message.textContent = "Please add your phone number";
      // stop function if no answer
      return;
    };

    // City
    var userCity = document.getElementById('city').value;
    // var userCountry = country.getAttribute('data-value');
    console.log('City ' + userCity);

    // State
    var userState = document.getElementById('state').value;
    // var userCountry = country.getAttribute('data-value');
    console.log('City ' + userState);

    // Gender - loop through all elements with class="gender"
    var userGenderList = document.getElementsByClassName('gender-radio');

    for(var i = 0; i < userGenderList.length; i++) {
      // if the radio was selected by the user, do this
      if(userGenderList[i].checked) {
        // set value of gender to the value selected in the radio 
        var userGender = userGenderList[i].value;
        console.log('Gender list ' + userGender);
      }
    }

    if(userGender == undefined) {
      // add a class of no-input to message if user forgets to select a value
      message.className = "no-input";
      // update the text content of message
      message.textContent = "Please select your gender";
      // stop function if no answer
      return;
    };

    // // Pets - loop through checkboxes, append to an array, return values
    var petList = document.getElementsByClassName('checked-pet');
    console.log('Pet list ' + petList);

    // store selected pets in this list
    var selectedPets = [];
    // loop through pet list, push checked items in selectedPets
    for(var i = 0; i < petList.length; i++){
        if(petList[i].checked){
            selectedPets.push(petList[i].value);
        }
    }

    if(petList == undefined) {
      // add a class of no-input to message if user forgets to select a value
      message.className = "no-input";
      // update the text content of message
      message.textContent = "Please select your pets";
      // stop function if no answer
      return;
    };

    // When everything looks good add a class of success to message
    message.className = "success";
    // update the text content of results
    message.textContent = "Got it! Creating your profile now ...";

    // create object for user profile data
    var userProfile = {
      name   : firstName + " " + lastName,
      email  : email,
      phone  : phone,
      city   : userCity,
      state  : userState,
      gender : userGender,
      pets   : selectedPets
    };

    // confirm existance of all user profile data
    console.log('User profile object ' + userProfile);

    // run displayProfile after 1 second passing in new profile data to be displayed
    setTimeout(function() {
      displayProfile(userProfile);
    }, 3000);
  };

  // display profile information
  function displayProfile(userProfile) {
    // make sure the user data is being passed through
    console.log(userProfile);

    // select the HTML elements that will display the user profile info
    var newUserName    = document.getElementById('new-user-name');
    var newUserEmail   = document.getElementById('new-user-email');
    var newUserPhone   = document.getElementById('new-user-phone');
    var newCityState   = document.getElementById('new-user-city-state');
    var newUserGender  = document.getElementById('new-user-gender');
    var newUserPets    = document.getElementById('new-user-pets');

    // Add text to the HTML elements using the userProfile object
    newUserName.innerText    = "Welcome "  + userProfile.name + "!";
    newUserEmail.innerText   = "Email: "   + userProfile.email;
    newUserPhone.innerText   = "Phone: "   + userProfile.phone;
    newCityState.innerText   = "City and State: " + userProfile.city + ", " + userProfile.state;
    newUserGender.innerText  = "Gender: "  + userProfile.gender;
    newUserPets.innerText    = "Pet(s): "  + userProfile.pets;

    // hide filled out user profile form and message
    document.getElementById('user-profile').style.display = "none";
    document.getElementById('message').style.display = "none";
    // display updated profile data
    document.getElementById('new-user-div').style.display = "block";
  }
  // Function that confirms user profile was created
  function confirmProfile(){
    document.getElementById('message').style.display = "block";
    message.className = "success";
    // update the text content of results
    setTimeout(function(){
     message.textContent = "Your new user profile was created!";
    }, 2000);
    
  }
  // Function that lets user update profile
  function updateProfile(){
    document.getElementById('message').style.display = "block";
    message.className = "no-input";
    setTimeout(function(){
     message.textContent = "Go ahead and update your profile!";
    }, 2000);
    document.getElementById('new-user-div').style.display = 'none';
    getUserInfo();

  }

  //Add event listener to button with id="confirm-profile"
  document.getElementById('confirm-profile').addEventListener('click', confirmProfile, false);

  //Add event listener to button with id="update-profile"
  document.getElementById('update-profile').addEventListener('click', updateProfile, false);

});