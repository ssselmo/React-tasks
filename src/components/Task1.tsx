import { randomInt } from "crypto";
import React, { useState, useEffect, useRef } from "react";


export const Task1: React.FC = () => {
  useEffect(() => {
    console.log(`Komponenta je prvi put renderisana`);
  },[]);
  return(
      <div>
      <p>Ovo je moja komponenta!</p>
      </div>
    );
    };

