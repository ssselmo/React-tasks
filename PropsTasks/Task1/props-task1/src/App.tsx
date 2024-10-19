import React, {FunctionComponent} from 'react';
import './App.css';


//Prvi zadatak
type AgeProps = {
  age?:number
};
export const App : FunctionComponent<AgeProps> = ({
  age = 25,
  }) => {
function Hello(){
  return (
    <div>
    {(age>=18)?  
      (<p>Punoljetni ste </p>)
    :
      (<p>Niste punoljetni</p>)}
      </div>
  );
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
