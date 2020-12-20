window.addEventListener('load', 
  function() { 
    
    /*--------------Fetch URL-----------------*/
    const URLPathname = window.location.pathname;
    
    /*--------------Extracting the name of the Process from the URL--------------*/
    const serviceIsTrue = URLPathname.split("/")[1];
    const authService = URLPathname.split("/")[2];

    const processNameRawText1 = URLPathname.slice(9, ).replace(/_+/g, " ");
    const processNameRawText2 = URLPathname.slice(12, ).replace(/_+/g, " ");
	
	//const dummyText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	//const dummyText2 = "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.";
	
    /*-----------------Redirect Homepage Menus to Main Website-----------------------*/
    (function redirectToMain() {
      const myServiceLink = document.getElementsByClassName("btn btn-lg btn-primary top");
	  /*--------Redirect Default Main Menu to Main Site--------------*/
	  const smMenu = document.getElementsByClassName("nav navbar-nav");
	  smMenu[1].innerHTML="<li><a href='https://www.kingston.gov.uk' tabindex='0'>Home</a></li><li><a href='https://www.kingston.gov.uk/i-need' tabindex='0'>I need to</a></li>";
     
	  myServiceLink[0].href = "https://www.kingston.gov.uk";
      myServiceLink[1].href = "https://www.kingston.gov.uk/i-need";
	  
    })();
	
	/*----------------Redirect Rating Page to Main Website-----------------------*/
	function ratingPageToMain() {
		const submitRating = document.getElementsByClassName("submitRating btn btn-success");
		submitRating[0].setAttribute('data-postratingredirecturl', 'https://www.kingston.gov.uk');
		const formTarget = document.createAttribute("formtarget");
		formTarget.value = "_top";
		submitRating[0].setAttributeNode(formTarget);
	};
      /*---------------------------Append Process Name to Breadcrumb----------------------------*/
      const elem = document.getElementsByClassName("btn-group hidden-xs clearfix")[0];
	  const smNavElement = document.getElementsByClassName("nav navbar-nav")[1];

	    if (serviceIsTrue == "service" && processNameRawText1 == "Report fly tipping") {
		 
		 elem.insertAdjacentHTML("beforeend", "<a style='font-weight: bold;'class='btn btn-lg btn-primary top'>Report fly-tipping</a>");
		 smNavElement.insertAdjacentHTML("beforeend", "<li><a href='#' tabindex='0' style='font-weight:bold;'>Report fly-tipping</a></li>");
		
		 ratingPageToMain();
		
		} else if (serviceIsTrue == "service") {
        
        elem.insertAdjacentHTML("beforeend", "<a style='font-weight: bold;'class='btn btn-lg btn-primary top'>"+processNameRawText1+"</a>");
		smNavElement.insertAdjacentHTML("beforeend", "<li><a href='#' tabindex='0' style='font-weight:bold;'>"+processNameRawText1+"</a></li>");


		const loginScreenAnon = document.querySelector("#anonymousLoginScreen>h1");
		const loginAnonText = document.querySelector("#anonymousLoginScreen>p");
        loginScreenAnon.innerText = "Register Now";
			
		if(processNameRawText1 == "Alpha HRRC Appointment Booking") {
			//loginAnonText.innerHTML = '<div class="landing_page_container"><div id="first_column"><ul class="landing_page_content"><li><h3>Why do we ask you to register for an account to book an appointment?</h3><p>The council has a fair use policy. This ensures that all residents have fair access and the site is Covid-19 secure. Resident self accounts are the way we do this.</p></li><li><h3>How do you register?</h3><p>Click on register button below.</p><ul class="registerList"><li>Provide an email address and password (at least 9 characters including a number). Keep this password safe as you will need it each time to log in.</li><li>You will receive an email. You will be asked to click on a link to verify your account.</li><li>Once you have verified your account, you will be asked to login.</li><li>The first time you login you need to fill out a short profile form.</li><li>You will then be taken to the booking form.</li></ul></li></ul></li></ul></div><div id="second_column"><ul class="landing_page_content"><li><h3>What if I have already registered and have a self account?</h3><p>Log in using the login button on this page. You must use the self-service option to log in. This will take you to the booking form.</p></li><li><h3>What do I have to bring with me to the refuse and recycling centre?</h3> <p> Identification - up to date driving licence, council tax statement or resident parking permit.</p></li></ul></div><div id="registerIcon_container"><div id="registerIcon"></div></div></div>';
		} else {
			//loginAnonText.innerText = "This is the dummy custom content for "+processNameRawText1+": "+dummyText2+"";
		};
		
		ratingPageToMain();
		
              
      } else if (serviceIsTrue == "en" && authService == "service") {
        
        elem.insertAdjacentHTML("beforeend", "<a style='font-weight: bold;'class='btn btn-lg btn-primary top'>"+processNameRawText2+"</a>");
        smNavElement.insertAdjacentHTML("beforeend", "<li><a href='/MyRequests' tabindex='0'>My Requests</a></li>");
				smNavElement.insertAdjacentHTML("beforeend", "<li><a href='#' tabindex='0' style='font-weight:bold;'>"+processNameRawText2+"</a></li>");
		
		 /*--------------------Registration Page------------------------------*/
		var loginScreenAnon = document.querySelector("#anonymousLoginScreen>h1");
		const loginAnonText = document.querySelector("#anonymousLoginScreen>p");
        
		if(processNameRawText2 == "Alpha HRRC Appointment Booking") {
			//loginAnonText.innerHTML = '<div class="anonPageRedirect"><h1 style="font-size: 40px; margin-top:0; margin-bottom:60px;">Thank You</h1><p class="registration-text">Please check your email for further instructions on how to to complete your account setup</p><div id="coverBox"></div></div>';
		} else {
			//loginAnonText.innerText = "This is the dummy custom content for "+processNameRawText2+": "+dummyText2+"";
		};
	
		ratingPageToMain();
		
      
      } else {
        
        elem.insertAdjacentHTML("beforeend", "");
		ratingPageToMain();
		
        
      };
    
  }, false);
