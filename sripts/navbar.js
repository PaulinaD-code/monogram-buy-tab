export function renderNavbar(){
  let html = `
  <div class="keyboard-project-navbar">
      
      <div class="monogram-logo">
        <img src="images/pobrany plik.png" alt="" class="nav-logo-img">
        <h5>Monogram</h5>
      </div>

      <div class="monogram-menu-content-container">
        <div class="monogram-menu-list js-monogram-menup-list">
          <ul>
            <li><a href="">How it Works</a></li>
            
            <li>
              <button class="li-btn-anchor-nav">
                <div class="anchor-anv-link js-anchor-workflow">
                  Workflows
                  <img src="images/icons8-arrow-down-24.png" alt="" class="nav-arrow-down-img">
                </div>
              </button>
           
            <div class="anchornav-list-link js-anchor-nav">
             <ul>
              <li><a href="">Audio Console</a></li>
              <li><a href="">Photo Console</a></li>
              <li><a href="">Video Console</a></li>
              <li><a href="">Mini Console</a></li>
             </ul>
            </div>
            </li>
            <li class="extra-margin"><a href="">Download</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Shop</a></li>
          </ul>
        </div>

        <div class="burger-button-container js-burger-button">
          <div class="nav-burger-line"></div>
          <div class="nav-burger-line"></div>
          <div class="nav-burger-line"></div>
        </div>

        <div class="shopping-button-container js-shopping-container">
          
          <img src="images/icons8-bag-64.png" alt="" class="shopping-icon-img">
          
          <div class="shopping-nav-button">
            <div class="button-nav-title">
              EUR 
            </div>
            <img src="images/icons8-arrow-down-24.png" alt="" class="nav-arrow-down-img">
          </div>

          <div class="anchor-nav-button-list js-anchor-nav-button">
            <ul>
              <li><a href="">
                <div class="anchor-land">USD</div>
                ($)
              </a> 
              </li>
              <li><a href="">
                <div class="anchor-land">CAD</div>
                ($)
              </a> 
              </li>
              <li><a href="">
                <div class="anchor-land">EUR</div>
                (€)
              </a> 
              </li>
              <li><a href="">
                <div class="anchor-land">AUD</div>
                ($)
              </a> 
              </li>
              <li><a href="">
                <div class="anchor-land">GBP</div>
                (£)
              </a> 
              </li>
              <li><a href="">
                <div class="anchor-land">KRW</div>
                (₩)
              </a> 
              </li>
              <li><a href="">
                <div class="anchor-land">JPY</div>
                (¥)
              </a> 
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="nav-hamburger-menu js-hamburger-menu">
        
        <div class="nav-hamburger-manu-top">
          <div class="monogram-logo">
            <img src="images/pobrany plik.png" alt="" class="nav-logo-img">
            <h5>Monogram</h5>
          </div>

          <button class="hamburger-menu-left js-hamburger-menu-exit">
            <img class="burger-nav-btn-exit" src="images/icons8-cross-48.png" alt="">
          </button>
        </div>

        <div class="navbar-burger-content-list">
          <ul>
            <li><a href=""> How it Works </a></li>
            <li><a href=""> 
              Workflows 
              <ol class="burger-workflow-list">
                <li><a href="">Audio Console</a></li>
                <li><a href="">Photo Console</a></li>
                <li><a href="">Video Console</a></li>
                <li><a href="">Mini Console</a></li>
              </ol>
            </a></li>
            <li><a href=""> Download </a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Shop</a></li>
          </ul>
        </div>

      </div>

      <div class="nav-sheet js-nav-sheet"></div>

    </div>
  `
  document.querySelector('.js-nav-keyboard-site').innerHTML = html;

  let listAnchor = document.querySelector('.js-anchor-nav');

//uruchomienie listy workflow

document.querySelector('.js-anchor-workflow').addEventListener('click', ()=>{

  if(listAnchor.className === "anchornav-list-link js-anchor-nav"){
    listAnchor.className = "anchornav-list-link js-anchor-nav anchornav-block"
  }else{
    listAnchor.className="anchornav-list-link js-anchor-nav"
  }
})

//uruchomienie listy zakupowej

let shoppingButton = document.querySelector('.js-shopping-container');

let listLangContainer = document.querySelector('.js-anchor-nav-button');

shoppingButton.addEventListener('click', () => {
  if(listLangContainer.className === 'anchor-nav-button-list js-anchor-nav-button'){
    listLangContainer.className = ' anchor-nav-button-list js-anchor-nav-button anchor-nav-button-list-visible'
  }else{
    listLangContainer.className = 'anchor-nav-button-list js-anchor-nav-button'
  }
})

const burgerExitBtn = document.querySelector('.js-hamburger-menu-exit');
let bugerNav = document.querySelector('.js-hamburger-menu');
let navSheet = document.querySelector('.js-nav-sheet')

const hamburgerBtn = document.querySelector('.js-burger-button');

hamburgerBtn.addEventListener('click', ()=>{
  if(bugerNav.className === 'nav-hamburger-menu js-hamburger-menu'){
    bugerNav.className = 'nav-hamburger-menu-active js-hamburger-menu';
    navSheet.classList.add('sheet-covered');
  }else{
    bugerNav.className = 'nav-hamburger-menu js-hamburger-menu';
    navSheet.classList.remove('sheet-covered');
  }
})

burgerExitBtn.addEventListener('click', () => {
  bugerNav.className = 'nav-hamburger-menu js-hamburger-menu';
  navSheet.className = 'nav-sheet js-nav-sheet'
})

window.addEventListener('click', (event)=>{
  if(event.target.className === 'nav-sheet js-nav-sheet sheet-covered'){
    bugerNav.className = 'nav-hamburger-menu js-hamburger-menu';
    navSheet.className = 'nav-sheet js-nav-sheet'
  }
})
}







