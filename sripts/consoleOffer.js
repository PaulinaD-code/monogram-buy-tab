import { 
  consoleTypes,
  matchingId,
  checkIfBigger
 } from "./data/consoleType.js";

 import './data/console-type-class.js'

 import convertToEuro from "./utils/moneyCount.js";

export function renderConsoleTypes(){
  let html = '';

  consoleTypes.forEach((consoleType)=>{
   
   html += `
    <div class="console-type-container grid-type-${consoleType.id} js-console-type-container js-console-type-container-${consoleType.id}"
    data-console-id="${consoleType.id}">
      
      <div class="image-container">
        <div class="image-keyborad-subcontainer">
          <img src="${consoleType.mainImage}" alt="" class="console-type-image js-console-type-image-${consoleType.id}">
        </div>

        <div class="image-keyborad-subcontainer-hidden">
          <img src="${consoleType.hoverImage}" alt="" class="console-type-image js-console-type-image-${consoleType.id}">
        </div>
   
        <div class="pre-order-container">PRE-ORDER</div>
      </div>

      <div class="name-n-price">
        <h3 class="console-type-name">${consoleType.name.toUpperCase()}</h3>
        <div class="keyboard-price js-keyborad-price-${consoleType.id}">
        ${convertToEuro(consoleType.priceCents)} 	&euro;
        <div class="shopping-button">SHOP NOW</div>
        </div>
      </div>
      <p class="console-description">${consoleType.description}</p>
    </div>
   
   `
    document.querySelector('.js-console-types-main-container-grid').innerHTML = html; 

    const container = document.querySelector(`.js-console-type-container-${consoleType.id}`);
    const consoleImg = document.querySelector(`.js-console-type-image-${consoleType.id}`)

    checkIfBigger(consoleType.id, container, consoleImg);
  });
}


