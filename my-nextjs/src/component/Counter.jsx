"use client"

import { useEffect, useState } from "react";
import React from 'react'

export default function Counter() {
    const [counter,setcounter]=useState(0);

    useEffect(
        ()=>{
            const Intervel= setInterval(
                ()=>{
                    setcounter(
                        (current_counter)=>{
                            return current_counter+1
                        }
                    )
                },1000
            )
            return ()=>clearInterval(Intervel)
        }
    )
    
  return (
    <h2>{counter}</h2>
  )
}
