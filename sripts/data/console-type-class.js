class ConsoleTypes {
 consoleTypes = [
    {
      id: '1',
      name: 'Mini Console',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow',
      priceCents: 23595,
      mainImage: '/images/consoleTypes/Everyday-Bundle.webp',
      hoverImage: '/images/consoleTypes/Everyday-Bundle-hover.webp',
      isBigger: false,
    },
    {
      id: '2',
      name: 'Audio Console',
      description: 'Ideal for music & audio. Adaptable to any workflow.',
      priceCents: 47195,
      mainImage: '/images/consoleTypes/Packaging_Traveler.webp',
      hoverImage: '/images/consoleTypes/Packaging-Traveler-hover.webp',
      isBigger: false,
    },
    {
      id: '3',
      name: 'Photo Console',
      description: 'Ideal for photo & video. Adaptable to any workflow.',
      priceCents: 56695,
      mainImage: '/images/consoleTypes/Consoles_StudioBracket1.webp',
      hoverImage: '/images/consoleTypes/Consoles_StudioBracket1-hover.webp',
      isBigger: false,
    },
    {
      id: '4',
      name: 'Video Console',
      description: 'Ideal for Video & Film. Adaptable to any workflow.',
      priceCents: 85095,
      mainImage: '/images/consoleTypes/Packaging_MasterClosedBracket1.webp',
      hoverImage: '/images/consoleTypes/Consoles_MasterBracket1-hover.webp',
      isBigger: false,
    },
    {
      id: '5',
      name: 'MONOGRAM KEYBOARD + MULTIPAD',
      description: 'Adaptable to any workflow.',
      priceCents: 51995,
      mainImage: '/images/consoleTypes/Monogram_Keyboard_Multipad.webp',
      hoverImage: '/images/consoleTypes/Monogram_Keyboard-hover.webp',
      isBigger: true,
    }];

    matchingId(consoleId){
      let matchingId;
    
      consoleTypes.forEach((type) =>{
        if(type.id === consoleId){
          matchingId = type;
        }
      })
      return matchingId;
    };

    checkIfBigger(consoleId, element, img){
      let matchingProduct = matchingId(consoleId)
    
      if(matchingProduct.isBigger){
        element.classList.add('biggerImg');
        img.classList.add('bigger-image');
      }
    }
}









