import { useState, useRef } from 'react'

export function Form (changeColor) {

   const [color, setColor] = useState('');
   const ref = useRef(null);

   const inputChange = () => {
      const verified = checkCode(ref.current.value);
      passCode(verified);
   }

   const passCode = (verified) => {
      if (verified === 'error') {
         changeColor.changeColor('#ff0000');
         setColor(verified);
         return;
      } else if (verified === '') {
         changeColor.changeColor('#808080');
         setColor(verified);
         return;
      }
      const rgb = hexToRgb(verified);
      setColor(rgb);
      changeColor.changeColor(verified);
      return;
   }

   const checkCode = (color) => {
      let verified = color;
      const reg = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i;
      if (!color) {
         verified = '';
         return verified;
      } else if (!reg.test(color)) {
         verified = 'error';
         return verified;
      }
      return verified;
   }

   const hexToRgb = (hex) => {
      hex = hex.replace('#', '');
      const r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
      const g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
      const b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
   }

   return (
   <form className="colorForm">
      <input
         className="field color"
         id="color"
         name="color"
         ref={ref}
         onChange={inputChange}
         placeholder= "color code">
      </input>
      <div className="field result">
         {color}
      </div>
   </form>
   )
}