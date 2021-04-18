window.addEventListener('load', 
  function() { 
    
    const URLPathname = window.location.pathname;
    
    const serviceIsTrue = URLPathname.split("/")[1];
    const authService = URLPathname.split("/")[2];

    const processNameRawText1 = URLPathname.slice(9, ).replace(/_+/g, " ");
    const processNameRawText2 = URLPathname.slice(12, ).replace(/_+/g, " ");
	
	const dummyText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	const dummyText2 = "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.";
	
	/*-----------------Redirect to Main Website-----------------------*/
    (function redirectToMain() {
      const myServiceLink = document.getElementsByClassName("btn btn-lg btn-primary top");
	  /*--------Redirect Default Main Menu to Main Site--------------*/
	  const smMenu = document.getElementsByClassName("nav navbar-nav");
		  if(smMenu[1]==true) {
		  smMenu[1].innerHTML="<li><a href='https://www.kingston.gov.uk' tabindex='0'>Home</a></li><li><a href='https://www.kingston.gov.uk/i-need' tabindex='0'>I need to</a></li>";
		 
		  myServiceLink[0].href = "https://www.kingston.gov.uk";
		  myServiceLink[1].href = "https://www.kingston.gov.uk/i-need";
	  }
    })();
	
/*--------------Redirect Rating Page to Main Website--------------------*/

	function ratingPageToMain() {
		const submitRating = document.getElementsByClassName("submitRating btn btn-success");
		if(submitRating[0]==true) {
			submitRating[0].setAttribute('data-postratingredirecturl', 'https://www.kingston.gov.uk');
			const skipRating = document.getElementsByClassName("skipRatingStep btn btn-primary");
			skipRating[0].setAttribute('data-postratingredirecturl', 'https://www.kingston.gov.uk');
			const formTarget = document.createAttribute("formtarget");
			formTarget.value = "_top";
			submitRating[0].setAttributeNode(formTarget);
			skipRating[0].setAttributeNode(formTarget);
		}
	};

/*----------------Append Process Name to Breadcrumb--------------------*/
      const elem = document.getElementsByClassName("btn-group hidden-xs clearfix")[0];
	  const smNavElement = document.getElementsByClassName("nav navbar-nav")[1];

	    if (serviceIsTrue == "service" && processNameRawText1 == "Report fly tipping") {
		 
		 elem.insertAdjacentHTML("beforeend", "<a style='font-weight: bold;'class='btn btn-lg btn-primary top'>Report fly-tipping</a>");
		 smNavElement.insertAdjacentHTML("beforeend", "<li><a href='#' tabindex='0' style='font-weight:bold;'>Report fly-tipping</a></li>");
		
		 ratingPageToMain();
		
		} else if (serviceIsTrue == "service") {
        
        elem.insertAdjacentHTML("beforeend", "<a style='font-weight: bold;'class='btn btn-lg btn-primary top'>"+processNameRawText1+"</a>");
		smNavElement.insertAdjacentHTML("beforeend", "<li><a href='#' tabindex='0' style='font-weight:bold;'>"+processNameRawText1+"</a></li>");

				
		ratingPageToMain();
		
              
      } else if (serviceIsTrue == "en" && authService == "service") {
        
        elem.insertAdjacentHTML("beforeend", "<a style='font-weight: bold;'class='btn btn-lg btn-primary top'>"+processNameRawText2+"</a>");
        smNavElement.insertAdjacentHTML("beforeend", "<li><a href='/MyRequests' tabindex='0'>My Requests</a></li>");
	  smNavElement.insertAdjacentHTML("beforeend", "<li><a href='#' tabindex='0' style='font-weight:bold;'>"+processNameRawText2+"</a></li>");
		
	
		ratingPageToMain();
		
      
      } else {
        
        elem.insertAdjacentHTML("beforeend", "");
	  
        ratingPageToMain();
		
        
      };

    
  }, false);
