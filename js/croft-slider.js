'use strict';

class CroftSlider {
   constructor({
      slider,
      slide,
      slidesPadding = 10,
      slidesToShow = 3,
      slidesToScroll = 1,
      variableHeight = false
   }) {
      this.slider = document.querySelector(slider);
      this.slide = document.querySelectorAll(slide);
      this.slidesPadding = slidesPadding;
      this.slidesToShow = slidesToShow;
      this.slidesToScroll = slidesToScroll;
      this.variableHeight = variableHeight;
      this.arrowLeft = document.createElement('button');
      this.arrowRight = document.createElement('button');
      this.wrap = document.createElement('div');
      this.slider.appendChild(this.wrap);
      this.slideWrap = null;
      this.slideWidth = 100 / this.slidesToShow;
      this.position = 0;

      this.init();
   }

   init() {
      this.addClass();
      this.addStyle();
      this.addArrow();
      this.addEvent();
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

   addStyle() {
      this.slide.forEach(elem => {
         elem.style.margin = `${this.slidesPadding}px`;
         this.slideWrap = document.createElement('div')
         this.slideWrap.classList.add('croft-slide-wrap');
         this.slideWrap.style.flex = `0 0 ${100 / this.slidesToShow}%`;
         this.slideWrap.appendChild(elem);
         this.wrap.appendChild(this.slideWrap);
      });
   }

   addArrow() {
      this.slider.appendChild(this.arrowLeft);
      this.slider.appendChild(this.arrowRight);
   }

   addEvent() {
      this.arrowLeft.addEventListener('click', () => {
         if (this.position === 0) return;
         this.position += this.slidesToScroll;
         this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
      });

      this.arrowRight.addEventListener('click', () => {
         if (Math.abs(this.position) >= this.slide.length - this.slidesToScroll - this.slidesToShow) {
            this.position = -(this.slide.length - this.slidesToShow);
            this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
            return;
         }
         this.position -= this.slidesToScroll;
         this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
      });
   }
}