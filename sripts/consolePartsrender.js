import { consoleParts } from "./data/consoleParts.js";
import convertToEuro from "./utils/moneyCount.js";

export function renderConsoleParts(){
  let html = '';

  consoleParts.forEach((consolePart)=>{
    
    html += `
    <div class="console-type-container-parts js-console-type-container"
    data-consolepart-id="${consolePart.id}">
     <div class="image-parts">
       ${renderPartsImage(consolePart.id)}
       ${renderPreOrder(consolePart.id)}
      </div>
      <div class="name-n-price">
        <h3 class="console-type-name part-name">${consolePart.name.toUpperCase()}</h3>
        <div class="keyboard-price js-keyborad-price-${consolePart.id}">
        ${convertToEuro(consolePart.priceCents)} 	&euro;
        <div class="shopping-button">SHOP NOW</div>
        </div>
      </div>
    </div>
    `
    document.querySelector('.js-console-parts-main-container').innerHTML = html;
  })
}

//renderConsoleParts();

function renderPartsImage(consolepartId){
  let matchingPart;

  consoleParts.forEach((part) =>{
    if(part.id === consolepartId){
      matchingPart = part;
    }
  })

  let html = '';

  if(matchingPart.isHover){
    html = `
       <div class="image-container-part-hoverable">
        <div class="image-keyborad-subcontainer" >
          <img src="${matchingPart.mainImage}" alt="" class="console-type-image-part"> 
        </div>
        <div class="image-keyborad-subcontainer-hidden">
          <img src="${matchingPart.hoverImage}" alt="" class="console-type-image-part">
        </div>
      </div>
    `
  }else if(!matchingPart.isHover){
    html = `
       <div class="image-container-part-rigit">
        <div class="image-keyborad-subcontainer" >
          <img src="${matchingPart.mainImage}" alt="" class="console-type-image-part">  
        </div>
      </div>
    `
  }
  return html
}

function renderPreOrder(consolepartId){
  let matchingPart;

  consoleParts.forEach((part) =>{
    if(part.id === consolepartId){
      matchingPart = part;
    }
  })

  let html = '';

  if(matchingPart.preOrderAvailable){
    html = `<div class="pre-order-container">PRE-ORDER</div>`
  }
  return html;
}
