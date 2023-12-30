import { useState } from 'react'
import { Form } from './Form/Form'

export function FormField () {
  const [color, setColor] = useState('#808080');

  const changeColor = (value) => {
    setColor(value);
  }

return (
  <div className='colorField' style={{backgroundColor: color}}>
    <Form changeColor={changeColor}/>
  </div>
  )
}