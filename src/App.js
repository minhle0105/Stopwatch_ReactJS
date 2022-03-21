import { Clock } from './components/Clock/Clock';
import { useState } from "react";

function App() {

    const [isOn, setIsOn] = useState(false);

    const toggle = (flag) => {
        setIsOn(flag);
    }

  return (
    <div className="App">
        <Clock isOn={isOn} toggle={(flag) => toggle(flag)}/>
    </div>
  );
}

export default App;
