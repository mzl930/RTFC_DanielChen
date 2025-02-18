function onImgClick(element) {
    window.location.href = "https://www.instagram.com/"
  }

function menu_open(x) {
  showMenu();
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(window.innerWidth < 600){
        return;
    }
    if ((document.body.scrollTop > 100 && document.body.scrollTop <= 120)|| (document.documentElement.scrollTop > 100 && document.documentElement.scrollTop <= 120)) {
        if(window.innerWidth > 1373){
            document.getElementById("NavbarId").style.height = "4em";
        }else{
            document.getElementById("NavbarId").style.height = "6em";
        }
        document.getElementById("NavLogoId").style.width = "52%";
        $(".NavLinkClass").css("padding-top", "1em")
    }
    else if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        if(window.innerWidth > 1373){
            document.getElementById("NavbarId").style.height = "3em";
        }else{
            document.getElementById("NavbarId").style.height = "6em";
        }
        document.getElementById("NavLogoId").style.width = "38%";
        $(".NavLinkClass").css("padding-top", "0.5em")
    }else {
        document.getElementById("NavbarId").style.height = "6em";
        document.getElementById("NavLogoId").style.width = "60%";
        $(".NavLinkClass").css("padding-top", "1.6em")
    }    
}

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function showMenu() {
    if ($("#menuPopup").css("display") == "none"){
        $("#menuPopup").css("display", "block");
    }else{
        $("#menuPopup").css("display", "none");
    }    
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('menuPopup') && !event.target.matches('div.bar1') && !event.target.matches('div.bar2') && !event.target.matches('div.bar3') && $(event.target).attr("id") != "sideMenuId"
    ) {
        $("#menuPopup").css("display", "none");
    }
}

