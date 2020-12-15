'use strict';

class CroftSlider {
   constructor({
      slider,
      slide,
      slidesPadding = 10,
      slidesToShow = 3,
      slidesToScroll = 1,
      variableHeight = false,
      autoplayDelay = 5000,
      arrows = true,
      dots = false
   }) {
      this.slider = document.querySelector(slider);
      this.slide = document.querySelectorAll(slide);
      this.slidesPadding = slidesPadding;
      this.slidesToShow = slidesToShow;
      this.slidesToScroll = slidesToScroll;
      this.variableHeight = variableHeight;
      this.arrowLeft = document.createElement('button');
      this.arrowRight = document.createElement('button');
      this.arrows = arrows;
      this.dots = dots;
      this.dotsWrap = document.createElement('div');
      this.dotsAll = null;
      this.wrap = document.createElement('div');
      this.slider.appendChild(this.wrap);
      this.slideWrap = null;
      this.slideWidth = 100 / this.slidesToShow;
      this.position = 0;
      this.autoplay = false;
      this.autoplayDelay = autoplayDelay;
      this.playButton = document.createElement('button');

      this.init();
   }

   init() {
      this.addArrow();
      this.addDots();
      this.addEvent();
      this.addClass();
      this.addStyle();
   }

   addClass() {
      this.slider.classList.add('croft-slider');
      this.wrap.classList.add('croft-slide-list');
      this.slide.forEach(slide => { slide.classList.add('croft-slide'); });
      this.arrowLeft.classList.add('arrow');
      this.arrowLeft.classList.add('arrow-left');
      this.arrowRight.classList.add('arrow');
      this.arrowRight.classList.add('arrow-right');
      this.arrows;
      this.playButton.classList.add('play-button');
      this.playButton.id = 'playBtn';
      this.playButton.title = 'turn on autoplay';
      this.dotsWrap.classList.add('croft-dots');
   }

   addStyle() {
      this.slide.forEach(elem => {
         elem.style.margin = `${this.slidesPadding}px`;
         this.slideWrap = document.createElement('div')
         this.slideWrap.classList.add('croft-slide-wrap');
         this.slideWrap.style.flex = `0 0 ${100 / this.slidesToShow}%`;
         if (this.variableHeight === false) {
            this.slideWrap.style.height = `400px`;
         }
         this.slideWrap.appendChild(elem);
         this.wrap.appendChild(this.slideWrap);
      });

      this.slider.appendChild(this.playButton);
   }

   addArrow() {
      if (this.arrows === true) {
         this.slider.appendChild(this.arrowLeft);
         this.slider.appendChild(this.arrowRight);
         this.arrows = document.querySelectorAll('.arrow');
      }
   }

   addDots() {
       if (this.dots === true) {
         this.slide.forEach(elem => {
            const div  = document.createElement('div');
            this.dotsWrap.appendChild(div);
         });
         this.dotsAll = this.dotsWrap.children;
         let i = 0;
         Array.from(this.dotsAll).forEach(elem => {
            elem.classList.add('croft-dot');   
            elem.setAttribute('data-id', i);
            i++;
         });
         this.dotsAll[0].classList.add('active');
         this.slider.appendChild(this.dotsWrap);
      }
   }

   addEvent() {
      let tempPlay,
          tempDot = this.dotsAll[0];

      this.arrowLeft.addEventListener('click', () => {
         if (this.position >= - this.slidesToScroll) {
            this.dotsAll[- this.position].classList.remove('active');
            this.position = 0;
            this.dotsAll[- this.position].classList.add('active');
            this.wrap.style.transform = `translateX(${this.position})`;
            return;
         }

         this.dotsAll[- this.position].classList.remove('active');
         this.position += this.slidesToScroll;
         this.dotsAll[- this.position].classList.add('active');
         this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
      });

      this.arrowRight.addEventListener('click', () => {
         if (Math.abs(this.position) >= this.slide.length - this.slidesToScroll - this.slidesToShow) {
            this.dotsAll[- this.position].classList.remove('active');
            this.position = -(this.slide.length - this.slidesToShow);
            this.dotsAll[- this.position].classList.add('active');
            this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
            return;
         }

         this.dotsAll[- this.position].classList.remove('active');
         this.position -= this.slidesToScroll;
         this.dotsAll[- this.position].classList.add('active');
         this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
      });

      this.playButton.addEventListener('click', () => {
         this.playButton.classList.toggle('playon');

         if (this.playButton.classList.contains('playon')) {
            var autoplayId = setInterval(() => {
               tempPlay = autoplayId;
               this.dotsAll[- this.position].classList.remove('active');
               this.position -= this.slidesToScroll;
               this.dotsAll[- this.position].classList.add('active');
               this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;

               if (Math.abs(this.position) >= this.slide.length - this.slidesToScroll - this.slidesToShow) {
                  clearInterval(tempPlay);
                  this.position = -(this.slide.length - this.slidesToShow);
                  this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
                  this.playButton.classList.toggle('playon');
               }
            }, this.autoplayDelay);
         } else {
            clearInterval(tempPlay);
         }
      });

      if (this.dots === true) {
         this.dotsAll[21].remove();
         this.dotsAll[20].remove();
         
         this.dotsWrap.addEventListener('click', (event) => {
            let target = event.target;

            if (target.matches('.croft-dot')) {
               this.dotsAll[- this.position].classList.remove('active');
               this.position = - target.getAttribute('data-id');
               this.dotsAll[- this.position].classList.add('active');
               this.wrap.style.transform = `translateX(${this.position * this.slideWidth}%)`;
            }
         });
      }
   }
}