export function renderHeader(){
  let html = `
   <div class="header-enter-container">
      <h1>A Console for Every Workflow</h1>
      <p class="lead">Discover the perfect console for yours.</p>
      
      <a href="#console-types" class="go-to-the-content">
        <img src="images/icons8-arrow-down-50.png" alt="" class="header-arrow-up">
      </a>
    </div>
  `

  document.querySelector('.js-enter-page-main-container').innerHTML = html

}
