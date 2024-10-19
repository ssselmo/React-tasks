import React, {FunctionComponent} from 'react';
import './App.css';

//PetiZadatak
    type CovjekProps = {
      ime? : string;
      prezime? : string;
      godinaRodjenja? : number;
    };
    const danasnjiDatum : Date = new Date();
    const godina = danasnjiDatum.getFullYear();
    
    export const App : FunctionComponent<CovjekProps> = ({
      ime = "Selma",
      prezime ="Mujan",
      godinaRodjenja = 1999
      }) =>
      {function Hello(){
         const godine = godina - godinaRodjenja;
        return (
          <div>
            <p>Moje puno ime je {ime} {prezime} i imam {godine} godina.</p>
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
