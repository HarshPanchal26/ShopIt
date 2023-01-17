import React from 'react'
import '../css/w3Slider.css';

const W3ImageSlider = (props) => {
    // javascripy starts from here 
    let slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }  
      
      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots   = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }
    // JavaScript ends here
    return (
        <div>
            <div class="slideshow-container">

                {props.listOfBack.map((x)=>{

                  <div class="mySlides fade">
                     <div class="numbertext">1 / 3</div>
                     <img src={x.url} style="width:100%" />
                     <div class="text">{x.id}</div>
                  </div>
                })}



                <a class="prev" onclick={plusSlides(-1)}>❮</a>
                <a class="next" hrf="#" onclick="plusSlides(1)">❯</a>

            </div>
            <br />

            <div style="text-align:center">
                <span class="dot" onclick={currentSlide(2)}></span>
                <span class="dot" onclick={currentSlide(3)}></span>
                <span class="dot" onclick={currentSlide(1)}></span>
            </div>

        </div>
    )
}

export default W3ImageSlider;
