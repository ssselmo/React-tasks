import React, {FunctionComponent} from 'react';
import './App.css';


//ČetvrtiZadatak
    type NameProps = {
      ime? : string;
      prezime? : string;
    };
    export const App : FunctionComponent<NameProps> = ({
      ime = "Selma",
      prezime ="Mujan"
      }) =>
      {function Hello(){
        return (
          <div>
            <p>Moje puno ime je {ime} {prezime}</p>
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
