'use strict';

const Croft = ({
   sliderClass,
   slideClass
}) => {

   const croftSlider = document.querySelector(sliderClass),
         slides = document.querySelectorAll(slideClass),
         croftSlideList = document.createElement('div');


   const addElement = () => {
       // Wrapper for the each slide
      slides.forEach(elem => {
         const div = document.createElement('div');
         div.append(elem);
         croftSlideList.appendChild(div);
      });
      // Wrapper for the all slides
      croftSlider.appendChild(croftSlideList);
   }

   const addClass = () => {
      croftSlider.classList.add('croft-slider');
      croftSlideList.classList.add('croft-slide-list');
      for (let i = 0; i < croftSlideList.children.length; i++) {
         croftSlideList.children[i].classList.add('croft-slide');
      }
   }
   
   addElement();
   addClass();

}