# croft-slider
Custom slider for training

You can use it by including:<br>
<b>croft-slider.js</b><br>
<b>yourScript.js</b><br>
files before closing tags <b>body</b> and <b>html></b>.<br>
Add <b>croft-style.css</b> file in the <b>head</b> tag.<br>
Add the code in your script file the next settins:<br>
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
