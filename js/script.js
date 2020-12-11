'use strict';

class CroftSlider {
   constructor({
      slider,
      slide,
      slidesToShow = 3
   }) {
      this.slider = document.querySelector(slider);
      this.slide = document.querySelectorAll(slide);
      this.slidesToShow = slidesToShow;
      this.arrowLeft = document.createElement('button');
      this.arrowRight = document.createElement('button');
      this.wrap = document.createElement('div');
      this.slide.forEach(elem => {
         elem.style.flex = `0 0 ${100 / this.slidesToShow}%`;
         this.wrap.appendChild(elem);
      });
      this.slider.appendChild(this.wrap);
      this.slideWidth = Math.floor(100 / this.slidesToShow);
      console.log(this.slideWidth);

      this.init();
   }

   init() {
      this.addClass();
      this.addArrow();
   }

   addClass() {
      this.slider.classList.add('croft-slider');
      this.wrap.classList.add('croft-slide-list');
      this.slide.forEach(slide => { slide.classList.add('croft-slide'); });
      this.arrowLeft.classList.add('arrow');
      this.arrowLeft.classList.add('arrow-left');
      this.arrowRight.classList.add('arrow');
      this.arrowRight.classList.add('arrow-right');
   }

   addArrow() {
      this.slider.appendChild(this.arrowLeft);
      this.slider.appendChild(this.arrowRight);

      this.arrowLeft.addEventListener('click', () => {
         this.wrap.style.transform += `translateX(${this.slideWidth}%)`;
      });

      this.arrowRight.addEventListener('click', () => {
         this.wrap.style.transform += `translateX(-${this.slideWidth}%)`;
      });
   }
}