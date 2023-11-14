import React from 'react'
import { useState } from 'react';
import {useSpring,animated} from "react-spring";

function Number({n}) {
    const {number} = useSpring({
        from:{number:0},
        number:n,
        delay:600,
        config:{mass:1,tension:20,friction:10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

export default function DataIncrease() {

    // function isInViewport (element)  {
    //     const rect = element.getBoundingClientRect();
    //     const windowHeight =
    //       window.innerHeight || document.documentElement.clientHeight;
    //     const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      
    //     return (
    //       rect.top <= windowHeight &&
    //       rect.bottom >= 0 &&
    //       rect.left <= windowWidth &&
    //       rect.right >= 0
    //     );
    //   };

    //   const handleScroll = () => {
    //     // const 
    //     const isInView = isInViewport()
    //   }

    //   const [startAnimation, setStartAnimation] = useState(false);
  return (
    <div className='container container-data-increase'>
      <h1><Number n = {100}/></h1>
    </div>
  )
}
