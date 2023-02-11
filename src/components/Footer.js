import React, { Component } from 'react';
import { useSelector } from 'react-redux';

function Footer()  {
        const veri=useSelector((state)=>state.counter.value)
    
   
        
        return (
            <div>
                BEnim global değerim: {veri}
            </div>
        );
    
}

export default Footer;