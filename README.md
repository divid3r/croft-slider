# croft-slider
Custom slider for training

You can use by including croft-slider.js and croft-style.css in your html page.
Then add in the html <script> tag:
  
<script>
  const croftSlider = new CroftSlider({
     slider: '.slider', // insert the slider class
     slide: '.slide', // insert the slide class
     slidesToShow: 3 // count of slides on the page
  });
 </script>
