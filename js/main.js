$(document).ready(function(){
  console.log('document loaded');
  // hide new profile form before user completes the form 
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

    console.log(firstName,lastName,email, phone);

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

    // Country of residence
    // var country     = document.getElementById('country');
    // var userCountry = country.options[country.selectedIndex].text;

    // Gender - loop through all elements with class="gender"
    // var userGenderList = document.getElementsByClassName('gender');
    // console.log('Gender list ' + userGenderList);

    // for(var i = 0; i < userGenderList.length; i++) {
    //   // if the radio was selected by the user, do this
    //   if(userGenderList[i].checked) {
    //     // set value of gender to the value selected in the radio 
    //     var userGender = userGenderList[i].value;
    //   }
    // }

    // if(userGender == undefined) {
    //   // add a class of no-input to message if user forgets to select a value
    //   message.className = "no-input";
    //   // update the text content of message
    //   message.textContent = "Please select your gender";
    //   // stop function if no answer
    //   return;
    // };

    // // Pets - loop through checkboxes, append to an array, return values
    // var petList = document.getElementsByClassName('checked-pet');
    // console.log('Pet list ' + petList);

    // // store selected pets in this list
    // var selectedPets = [];
    // // loop through pet list, push checked items in selectedPets
    // for(var i = 0; i < petList.length; i++){
    //     if(petList[i].checked){
    //         selectedPets.push(petList[i].value);
    //     }
    // }

    // if(petList == undefined) {
    //   // add a class of no-input to message if user forgets to select a value
    //   message.className = "no-input";
    //   // update the text content of message
    //   message.textContent = "Please select your pets";
    //   // stop function if no answer
    //   return;
    // };

    // return selectedPets;
    // console.log(selectedPets);

    // When everything looks good add a class of success to message
    message.className = "success";
    // update the text content of results
    message.textContent = "Got it! Creating your profile now...";

    // create object for user profile data
    var userProfile = {
      name   : firstName + " " + lastName,
      email  : email,
      phone  : phone,
      // country: userCountry,
      // gender : userGender,
      // pets   : selectedPets
    };

    // confirm existance of all user profile data
    console.log('User profile object ' + userProfile);

    // run displayProfile after 1 second passing in new profile data to be displayed
    setTimeout(function() {
      displayProfile(userProfile);
    }, 2000);
  };

  // display profile information
  function displayProfile(userProfile) {
    // make sure the user data is being passed through
    console.log(userProfile);

    // select the HTML elements that will display the user profile info
    var newUserName    = document.getElementById('new-user-name');
    console.log('This is newUserName' + newUserName);
    var newUserEmail   = document.getElementById('new-user-email');
    var newUserPhone   = document.getElementById('new-user-phone');
    // var newUserCountry = document.getElementById('new-user-country');
    var newUserGender  = document.getElementById('new-user-gender');
    var newUserPets    = document.getElementById('new-user-pets');

    // Add text to the HTML elements using the userProfile object
    newUserName.innerText    = "Welcome "  + userProfile.name + "!";
    console.log("this is newusername innertext " + newUserName.innerText);
    newUserEmail.innerText   = "Email: "   + userProfile.email;
    newUserPhone.innerText   = "Phone: "   + userProfile.phone;
    // newUserCountry.innerText = "Country: " + userProfile.country;
    // newUserGender.innerText  = "Gender: "  + userProfile.gender;
    // newUserPets.innerText      = "Pets: "    + userProfile.pets;

    // hide filled out user profile form and message
    document.getElementById('user-profile').style.display = "none";
    document.getElementById('message').style.display = "none";
    // display updated profile data
    document.getElementById('new-user-div').style.display = "block";
  }

});