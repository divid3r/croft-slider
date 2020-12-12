# croft-slider
Custom slider for training

You can use it by including <b>croft-slider.js</b> and <b>croft-style.css</b> in your html page.<br>
Then add in the html <script> tag:<br>
<pre>
<script>
  const croftSlider = new CroftSlider({
     slider: '.slider', // insert your slider class
     slide: '.slide',   // insert your slide class
     slidesPadding: 10, // paddings between slides
     slidesToShow: 3    // count of slides on the page
  });
 </script>
 </pre>
