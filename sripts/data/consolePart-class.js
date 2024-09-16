class ConsolePart {
  consolePartsElements = [
    {
      id: '11',
      name: 'Monogram Keyboard',
      priceCents: 37595,
      mainImage:"/images/consoleParts/Monogram_Keyboardv2.webp",
      hoverImage:"/images/consoleParts/mono-1-hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '22',
      name: 'Monogram Multipad',
      priceCents: 18795,
      mainImage:"/images/consoleParts/MonogramMultipad.webp",
      hoverImage:"/images/consoleParts/Monogram_Keyboard-hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '33',
      name: 'Monogram Core',
      priceCents: 14995,
      mainImage:"/images/consoleParts/Packaging_CoreBracket1.webp",
      hoverImage:"/images/consoleParts/Consoles_CoreBracket1-hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '44',
      name: 'Slider Module',
      priceCents: 14995,
      mainImage:"/images/consoleParts/Packaging_SliderHeroBracket1.webp",
      hoverImage:"/images/consoleParts/Consoles_SliderBracket1_hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '55',
      name: 'Orbiter Module',
      priceCents: 14995,
      mainImage:"/images/consoleParts/Packaging_OrbiterBracket1.webp",
      hoverImage:"/images/consoleParts/Consoles_OrbiterHero-hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '66',
      name: 'Essential Keys Module',
      priceCents: 12195,
      mainImage:"/images/consoleParts/Packaging_KeysBracket1.webp",
      hoverImage:"/images/consoleParts/Consoles_KeysBracket1_hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '77',
      name: 'Dial Module',
      priceCents: 12195,
      mainImage:"/images/consoleParts/Packaging_DialHeroBracket1.webp",
      hoverImage:"/images/consoleParts/Consoles_DialBracket1-hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '88',
      name: 'Monogram Carrying Case',
      priceCents: 5595,
      mainImage:"/images/consoleParts/MonogramCC.webp",
      hoverImage:"/images/consoleParts/MonogramCC_Case-hover.webp",
      isHover: true,
      preOrderAvailable: true,
    },
    {
      id: '99',
      name: 'Console Pack: Video',
      priceCents: 6495,
      mainImage:"/images/consoleParts/SW-box-render.webp",
      hoverImage:"/images/consoleParts/SW-box-render.webp",
      isHover: false,
      preOrderAvailable: false,
    },
    {
      id: '101',
      name: 'Console Pack: Photo',
      priceCents: 3695,
      mainImage:"/images/consoleParts/SW-box-render-mini.webp",
      hoverImage:"/images/consoleParts/SW-box-render-mini.webp",
      isHover: false,
      preOrderAvailable: false,
    },
    {
      id: '102',
      name: 'Console Pack: Audio',
      priceCents: 2795,
      mainImage:"/images/consoleParts/SW-box-render-pack.webp",
      hoverImage:"/images/consoleParts/SW-box-render-pack.webp",
      isHover: false,
      preOrderAvailable: false,
    },
    {
      id: '103',
      name: 'Monogram Care',
      priceCents: 3695,
      mainImage:"/images/consoleParts/Care-updated-traveler.webp",
      hoverImage:"/images/consoleParts/MONO_CONSOLE_CARE_STU-hover.webp",
      isHover: true,
      preOrderAvailable: false,
    },
  ];

  renderPartsImage(consolepartId){
    let matchingPart;
  
   this.consolePartsElements.forEach((part) =>{
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
  };

  renderPreOrder(consolepartId){
    let matchingPart;
  
    this.consolePartsElements.forEach((part) =>{
      if(part.id === consolepartId){
        matchingPart = part;
      }
    })
  
    let html = '';
  
    if(matchingPart.preOrderAvailable){
      html = `
      <div class="pre-order-container">PRE-ORDER</div>
      `
    }
    return html;
  }
}



