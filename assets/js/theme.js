/* Open navbar when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close navbar when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



function smoothScroll() {
  var element = document.getElementById("section5");
element.style.top = document.body.offsetHeight - document.getElementById("footer").offsetHeight - window.innerHeight + "px";
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// $(document).ready(function () {
//   // Add smooth scrolling
  
//   $(".fixed-anchor-link").on("click", function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
      
//       event.preventDefault();
      
//       // Store hash
//       var hash = this.hash;
        
//       //let scrollAnount =  $(hash).position().top - $(hash).height();
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate( 
//         {
//           scrollTop: $(hash).offset().top,
          
//         },
//         3000,
//         // function () {
//         //   // Add hash (#) to URL when done scrolling (default click behavior)
//         //   window.location.hash = hash;
//         // }
        
//       );
//     } // End if
//   });
// });



//Show the icon on scroll and make it disappear when scrolled back

window.addEventListener('scroll', function(e) {
  if (this.oldScroll < this.scrollY){
    document.getElementById('upArrow').style.display = "block"  
    document.getElementById('upArrow').style.position = "fixed" 
  }
  else if(this.scrollY == 0){
    document.getElementById('upArrow').style.display = "none"  
    document.getElementById('upArrow').style.position = "static" 
  }
  this.oldScroll = this.scrollY;
})
// document.getElementById('upArrow').style.display = "block"  

//  document.getElementById('upArrow').addEventListener('click', function(){
//   smoothScroll();
// })

