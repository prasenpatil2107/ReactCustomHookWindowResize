import React , {useState,useEffect} from 'react';

export const useWindowSize = () =>{

    const[sizeo,setSizeo]= useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })

    const handleResize = () =>{
        setSizeo({
            height:window.innerHeight,
        width:window.innerWidth,
        })
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
    },[])
    return sizeo;
}


