# croft-slider
Custom slider for training

You can use it by including <b>croft-slider.js</b> then <b>your script file </b>(for example, script.js) before closing tags </body> and </html>.<br>
Add <b>croft-style.css</b> in the <head> tag (for example, <link rel="stylesheet" href="css/style.css">).<br>
In your script add the code with the slider's settins:<br>
<pre>
<script>
   new CroftSlider({
      slider: '.slider',     // insert your slider class
      slide: '.slide',       // insert your slide class
      slidesPadding: 10,     // paddings between slides (in pixels)
      slidesToShow: 3,       // count of slides on the page
      slidesToScroll: 3,     // how many slides do you want to scroll
      variableHeight: false, // different slide heights, check true/false
      autoplayDelay: 4000,   // delay before a slide moving
      arrows: true,          // show arrows (default = true)
      dots: false,           // show dots (defauot = false)
   });
 </script>
 </pre>
