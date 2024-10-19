import React, {FunctionComponent} from 'react';
import './App.css';


//Drugi zadatak
type TemperatureProps = {
  temperature? : number;
};
export const App : FunctionComponent<TemperatureProps> = ({
  temperature = 25,
  }) =>
  {function Hello(){
    return (
      (temperature>=22)?  
      <div>
        <p>Toplo je </p>
      </div>
      :
        <div>
        <p>Hladno je</p>
      </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <Hello/>
          
        </div>
      </header>
    </div>
  );
};
export default App;
