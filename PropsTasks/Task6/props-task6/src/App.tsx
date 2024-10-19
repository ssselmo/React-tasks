import React, {FunctionComponent} from 'react';
import './App.css';


    //Šesti-Sedmi Zadatak
    type NizProps = {
    imena?:string[];
      };
    export const App : FunctionComponent<NizProps> = ({imena=[]}) =>{
      const novaImena = [...imena, "Selma", "Ilhan", "Belma"];
        return (
            <div>
          <h1>Lista Imena</h1>
          {novaImena.map((ime, index) => (
            <p key={index}>{ime}</p>
          ))}
          </div>
        )
      }
