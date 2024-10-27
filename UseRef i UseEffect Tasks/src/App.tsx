import { randomInt } from "crypto";
import React, { useState, useEffect, useRef } from "react";
import {Task1} from "./components/Task1";
import {Task2} from "./components/Task2";
import {Task3} from "./components/Task3";
import {Task4} from "./components/Task4";
import {Task5} from "./components/Task5";
export const App: React.FC = () => {
  return(
    <div>
      <Task1/>
      <Task2/>
      <Task3/>
      <Task4/>
      <Task5/>
    </div>
  );
};
  // const [prvi, postaviPrvi] = useState(0);
  // const [drugi, postaviDrugi] = useState(0);
  // const [count, setCount] = useState(0);
  // const [count, setCount] = useState(0);
  // const [button, setButton] = useState(false);

//   const countRef = useRef(0);
//   const handleClick = () =>
// {
//   countRef.current+=1;
//   alert(`Kliknuli ste ${countRef.current} puta`);
// }
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [value,setValue] = useState("");
// const handleClick = () => {
//   if (inputRef.current)
//     setValue(inputRef.current.value);

// }

//useEffect(() => {
    // console.log(`Broj klikova : ${count}`);
    // if(count>5)
    // {
    //   setButton(true);
    // }
    // inputRef.current?.focus();},[]);
  

  // useEffect(() => {
  //   console.log(`Trenutni broj: ${count}`);
  // }, [count]);,
  // return () => {
    
  //   console.log("Čišćenje efekata"); };
  // },);
  // return(
  //     <div>
        
  //     {/* <label htmlFor="input">Unesite tekst</label>
  //     <input ref={inputRef} id="input" type="text"/>
  //     <button onClick={handleClick}>Prikazi</button>
  //     <p>{inputRef.current?.value}</p> */}
  //     <button onClick={handleClick}>Kliknite me</button>
  //     <p>{countRef.current}</p>
      
  //     </div>
  //   );

    /* <h1> Kliknuli smo {count} puta</h1>
        <h2> {count<=2? "Kliknuli ste manje od 2" : "Kliknuli ste vise od 2 puta"} </h2>
        <button className="btn" onClick={() => setCount(count + 1)} disabled={button}>Povećaj</button>
   */
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Povećaj</button>
  //     <button onClick={() => setCount(0)} >Resetiraj</button>
  //   </div>
  // );



  // const [ime, setIme] = useState("Ime");
  // const [prezime, setPrezime] = useState("Prezime");
  
    // const [darkMode, setDarkMode] =useState (false);
    // const toggleTheme = () => { setDarkMode(!darkMode);

    // };
  
    // <div className={darkMode? 'dark-theme' : 'light-theme'}>
      
      
    //   <button onClick={toggleTheme}>{darkMode? 'Prebaci na svijetlu temu' : 'Prebaci na tamnu temu'}</button>
      

    // </div>


// export default App;
