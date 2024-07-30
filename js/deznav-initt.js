
"use strict"

var dzSettingsOptions = {};

function getUrlParams(dParam) 
	{
		var dPageURL = window.location.search.substring(1),
			dURLVariables = dPageURL.split('&'),
			dParameterName,
			i;

		for (i = 0; i < dURLVariables.length; i++) {
			dParameterName = dURLVariables[i].split('=');

			if (dParameterName[0] === dParam) {
				return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
			}
		}
	}

(function($) {
	
	"use strict"
	
	/* var direction =  getUrlParams('dir');
	
	if(direction == 'rtl')
	{
        direction = 'rtl'; 
    }else{
        direction = 'ltr'; 
    } */
	
	dzSettingsOptions = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_2",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_13",
		sidebarStyle: "mini",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "mini",
	};

	
	
	
	new dzSettings(dzSettingsOptions); 

	jQuery(window).on('resize',function(){
        /*Check container layout on resize */
		///alert(dzSettingsOptions.primary);
        dzSettingsOptions.containerLayout = $('#container_layout').val();
        /*Check container layout on resize END */
        
		new dzSettings(dzSettingsOptions); 
	});
	
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const mainWrapper = document.getElementById("main-wrapper");
    const sidebar = document.querySelector(".deznav");
    const hamburger = document.querySelector(".nav-control .hamburger");

    // Inicialmente, defina o estilo da sidebar como "mini"
    mainWrapper.setAttribute("data-sidebar-style", "mini");

    // Alternar entre mini e full ao clicar no hamburger
    hamburger.addEventListener("click", function() {
        if (mainWrapper.getAttribute("data-sidebar-style") === "mini") {
            mainWrapper.setAttribute("data-sidebar-style", "full");
        } else {
            mainWrapper.setAttribute("data-sidebar-style", "mini");
        }
    });

    // Expandir sidebar ao passar o mouse
    sidebar.addEventListener("mouseover", function() {
        mainWrapper.setAttribute("data-sidebar-style", "full");
    });

    // Recolher sidebar ao tirar o mouse
    sidebar.addEventListener("mouseout", function() {
        mainWrapper.setAttribute("data-sidebar-style", "mini");
    });
});
