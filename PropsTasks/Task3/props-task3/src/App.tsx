import React, {FunctionComponent} from 'react';
import './App.css';


//TreciZadatak
type LogProps = {
  isLoggedIn? : boolean;
};
export const App : FunctionComponent<LogProps> = ({
  isLoggedIn = false,
  }) =>
  {function Hello(){
    return (
      (isLoggedIn)?  
      <div>
        <p>Prijavljeni ste </p>
      </div>
      :
        <div>
        <p>Niste prijavljeni</p>
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
