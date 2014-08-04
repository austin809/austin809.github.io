$(document).ready(function(){


	var intro = $("#main_intro");
	var projects = $("#projects");
	var blog = $("#blog");
	var contact = $("#contact");
	

	$(link).hover(function(){
		$(link).animate({height: "50px"}, {duration:'slow', queue: false});
		$(link).animate({width: "300px"}, {duration:'slow', queue: false});
		$("#link img").animate({width: "50px"}, {duration:'slow', queue: false});
		$("#link img").animate({height: "50px"}, {duration:'slow', queue: false});
		$("#link").css("background-color", "#B25E24");
		
	},
	function(){
		$(link).animate({height: "30px"}, {duration: 'slow', queue: false});
		$(link).animate({width: "130px"}, {duration: 'slow', queue: false});
		$("#link img").animate({width: "20px"}, {duration:'slow', queue: false});
		$("#link img").animate({height: "20px"}, {duration:'slow', queue: false});
		$("#link").css("background-color", "#FF7819");

	})



	if (intro.hasClass("tabbed") == true){
		alert("passed");
	}
	if (projects.hasClass("tabbed") == true){
		alert("passed");
	}
	if (blog.hasClass("tabbed") == true){
		alert("passed");
	}
	if (contact.hasClass("tabbed") == true){
		alert("passed");
	}

	var tabLinks = new Array();
    var contentDivs = new Array();

    function init() {

      // Grab the tab links and content divs from the page
      var tabListItems = document.getElementById('tabs').childNodes;
      for ( var i = 0; i < tabListItems.length; i++ ) {
        if ( tabListItems[i].nodeName == "LI" ) {
          var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
          var id = getHash( tabLink.getAttribute('href') );
          tabLinks[id] = tabLink;
          contentDivs[id] = document.getElementById( id );
        }
      }

      // Assign onclick events to the tab links, and
      // highlight the first tab
      var i = 0;

      for ( var id in tabLinks ) {
        tabLinks[id].onclick = showTab;
        tabLinks[id].onfocus = function() { this.blur() };
        if ( i == 0 ) tabLinks[id].className = 'selected';
        i++;
      }

      // Hide all content divs except the first
      var i = 0;

      for ( var id in contentDivs ) {
        if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
        i++;
      }
    }

    function showTab() {
      var selectedId = getHash( this.getAttribute('href') );

      // Highlight the selected tab, and dim all others.
      // Also show the selected content div, and hide all others.
      for ( var id in contentDivs ) {
        if ( id == selectedId ) {
          tabLinks[id].className = 'selected';
          contentDivs[id].className = 'tabContent';
        } else {
          tabLinks[id].className = '';
          contentDivs[id].className = 'tabContent hide';
        }
      }

      // Stop the browser following the link
      return false;
    }

    function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }

    function getHash( url ) {
      var hashPos = url.lastIndexOf ( '#' );
      return url.substring( hashPos + 1 );
    }

    //]]>
})