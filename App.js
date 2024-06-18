const gif = document.getElementById('gif');

   document.addEventListener('click', getClickedPosition, false);

     function getClickedPosition (e) {

        let relativePos = gif.getBoundingClientRect();

        let centerX = relativePos.left + relativePos.width / 2;
        let centerY = relativePos.top + relativePos.height / 2;

        let clickX = e.clientX;
        let clickY = e.clientY;

        let dx = clickX - centerX;
        let dy = clickY - centerY;
        
        let xPosition = e.clientX - (gif.offsetWidth/2);
        let yPosition = e.clientY - (gif.offsetHeight/2);

        let angle = Math.atan2(dy, dx) * (180 / Math.PI);

        let translate3DValue = `translate3d(${xPosition}px, ${yPosition}px, 0) rotateY(${angle}deg)`;

        gif.style.transform = translate3DValue;


     };



