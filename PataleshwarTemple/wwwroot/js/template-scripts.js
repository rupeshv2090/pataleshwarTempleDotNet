jQuery(document).ready(function($) {
  // One page navigation
  var lastId,
      topMenu = $(".top-nav"),
      topMenuHeight = topMenu.outerHeight() + 15,
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function() {
          var item = $($(this).attr("href"));
          if (item.length) {
              return item;
          }
      });
  menuItems.click(function(e) {
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate({
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
  });
  $(window).scroll(function() {
      var fromTop = $(this).scrollTop() + topMenuHeight;
      var cur = scrollItems.map(function() {
          if ($(this).offset().top < fromTop)
              return this;
      });
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
  
      if (lastId !== id) {
          lastId = id;
          menuItems
              .parent().removeClass("active-item")
              .end().filter("[href=#" + id + "]").parent().addClass("active-item");
      }
  });
  
  		//image Zoom Script
			var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption




var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
$('img').click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
			

        
});  