import Btn from './Btn';
import { useState } from 'react';

function ModeToggler() {
  const [darkModeOn, setDarkModeOn] = useState(true);

  const clickHandler = () => {
    setDarkModeOn(!darkModeOn);
  };

  return (
    <div>
      {darkModeOn ? <h1>Dark mode is on</h1> : <h1>Light mode is on</h1>}
      <Btn clickHandler={clickHandler} />
    </div>
  )
}

export default ModeToggler;