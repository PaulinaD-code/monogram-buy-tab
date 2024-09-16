export function renderFooter(){
  let html = `
  <div class="footer-main-container">
     
      <div class="footer-main-section grid-a">
        <p class="foot-1">Monogram</p>
        <address>305 King St. W.<br>Suite 502<br>Kitchener, ON<br>Canada</address>
      </div>

      <div class="footer-main-section grid-b">
        <p class="foot-1">Quick Links</p>
       <ul>
        <li><a href="">Home</a></li>
        <li><a href="">How it Works</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Download</a></li>
       </ul>
      </div>

      <div class="footer-main-section grid-c">
        <p class="foot-1">Help</p>
       <ul>
        <li><a href="">FAQs</a></li>
        <li><a href="">Support Center</a></li>
        <li><a href="">Shipping ans Sales</a></li>
       </ul>
      </div>

      <div class="footer-main-section grid-d">
        <p class="foot-1">Information</p>
       <ul>
        <li><a href="">About Us</a></li>
        <li><a href="">Work with us</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Terms of Sale</a></li>
        <li><a href="">Press Kit</a></li>
       </ul>
      </div>

      <div class="footer-main-section grid-e">
        <p class="foot-1">Subscribe to Monogram</p>
        <p class="foot-2">Master productivity with Creative Console and get all the latest Monogram news.</p>
        
        <div class="footer-contact-section">
          <input placeholder="Email Address" class="footer-contact-input">
          <button class="footer-contact-button">Submit</button>
        </div>

        <div class="footer-contact-section">
          <div class="footer-icon-container">
            <img src="images/footer-icons/icons8-instagram-50.png" alt="" class="footer-icon-img">
          </div>
          <div class="footer-icon-container">
            <img src="images/footer-icons/icons8-twitter-50.png" alt="" class="footer-icon-img">
          </div>
          <div class="footer-icon-container">
            <img src="images/footer-icons/icons8-facebook-48.png" alt="" class="footer-icon-img">
          </div>
          <div class="footer-icon-container">
            <img src="images/footer-icons/icons8-youtube-50.png" alt="" class="footer-icon-img">
          </div>
        </div>

        <div class="footer-contact-section">
          <p class="footer-3">© Monogram 2024</p>
        </div>   
      </div>

    </div>
  `
  document.querySelector('.js-main-console-footer').innerHTML = html;
}
