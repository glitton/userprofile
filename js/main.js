$(document).ready(function(){

  // function to get users data
  function getUserData() {
    // create var to display results to later
    var userPhone     = document.getElementById('results');

    // store vaules for user first & last name, email and phone num
    var userFirst     = document.getElementById('userfname').value;
    var userLast      = document.getElementById('userlname').value;
    var userEmail     = document.getElementById('userEmail').value;
    var userPhone     = document.getElementById('userPhone').value;

    // store elements by class for radios and select - will loop through later to find user selection
    var userGenderEls = document.getElementsByClassName("userGender");
    var userColorEls  = document.getElementsByClassName("userColor");
    var userBirthEls  = document.getElementsByClassName('userBirth');

    // create variables to store gender, color and birth later
    var userGender, userColor, userBirth;

    /*
    FIRST NAME
    */
    if(userFirst == "") {
      // add a class of failure to results if no user first name value
      results.className = "failure";
      // update the text content of results
      results.textContent = "you forgot to add your first name";

      // stop function if no answer
      return;
    };

    /*
    LAST NAME
    */
    if (userLast == "") {
      // add a class of failure to results if no user last name value
      results.className = "failure";
      // update the text content of results
      results.textContent = "you forgot to add your last name";

      // stop function if no answer
      return;
    };

    /*
    GENDER
    */
    // loop through all elements with class="userGender"
    for(var i = 0; i < userGenderEls.length; i++) {
      // if the radio was selected by the user, do this
      if(userGenderEls[i].checked) {
        // set value of answer 3 to the value in the radio item
        userGender = userGenderEls[i].value;
      };
    };
    // stop function if no data is there for gender
    if(userGender == undefined) {
      // add a class of failure to results if no user gender value
      results.className = "failure";
      // update the text content of results
      results.textContent = "you forgot to select a gender";

      // stop function if no answer
      return;
    };

    /*
    EMAIL
    */
    if (userEmail == "") {
      // add a class of failure to results if no user email value
      results.className = "failure";
      // update the text content of results
      results.textContent = "you forgot to add your email";

      // stop function if no answer
      return;
    };

    /*
    PHONE NUMBER
    */
    if (userPhone == "") {
      // add a class of failure to results if no user phone value
      results.className = "failure";
      // update the text content of results
      results.textContent = "you forgot to add your phone number";

      // stop function if no answer
      return;
    };

    /*
    FAVORITE COLOR
    */
    // loop through all elements with class="userColor"
    for(var i = 0; i < userColorEls.length; i++) {
      // check which was selected by the user, do this
      if(userColorEls[i].selected) {
        // set value of answer 2 to the value in the selected item
        userColor = userColorEls[i].value;
      };
    };
    // stop function if no data for question 2
    if(userColor == "") {
      // add a class of failure to results if no user color value
      results.className = "failure";
      // update the text content of results
      results.textContent = "you forgot to select your favorite color";

      // stop function if no answer
      return;
    }

    /*
    BIRTH PLACE
    */
    // loop through all elements with class="userBirth"
    for(var i = 0; i < userBirthEls.length; i++) {
      // if the radio was selected by the user, do this
      if(userBirthEls[i].checked) {
        // set value of answer 3 to the value in the radio item
        userBirth = userBirthEls[i].value;
      };
    };
    // stop function if no data is there for gender
    if(userBirth == undefined) {
      // add a class of failure to results if no user birth value
      results.className = "failure";
      // update the text content of results
      results.textContent = "you forgot to select a place of birth";

      // stop function if no answer
      return;
    }

    /*
    ON SUCCESS
    */
    // if everything passes add a class of success to results
    results.className = "success";
    // update the text content of results
    results.textContent = "thanks! updating now";

    // create object for user profile data
    var userProfile = {
      name : userFirst + " " + userLast,
      gender : userGender,
      email : userEmail,
      phone : userPhone,
      color : userColor,
      birth : userBirth
    };

    // confirm existance of all user profile data
    console.log(userProfile);

    // run displayProfile after 1 second passing in new profile data to be displayed
    setTimeout(function() {
      displayProfile(userProfile);
    }, 1000);
  };


  // display profile information
  function displayProfile(userProfile) {
    // make sure the user data is being passed through
    console.log(userProfile);

    // select some HTML elements by id
    var userName   = document.getElementById('newUserName');
    var userGender = document.getElementById('newUserGender');
    var userEmail  = document.getElementById('newUserEmail');
    var userPhone  = document.getElementById('newUserPhone');
    var userColor  = document.getElementById('newUserColor');
    var userBirth  = document.getElementById('newUserBirth');

    // change the text of these variables using the userProfile object
    userName.innerText   = "Welcome " + userProfile.name;
    userGender.innerText = "Gender: " + userProfile.gender;
    userEmail.innerText  = "Email: " + userProfile.email;
    userPhone.innerText  = "Phone: " + userProfile.phone;
    userColor.innerText  = "Favorite Color: " + userProfile.color;
    userBirth.innerText  = "Birth Continent: " + userProfile.birth;

    // hide new profile form
    document.getElementById('newProfile').style.display = "none";
    // display updated profile data
    document.getElementById('updatedProfile').style.display = "block";
  }

  // add click function to element with id="sendDataButton"
  document.getElementById('sendDataButton').addEventListener('click', getUserData, false);

});