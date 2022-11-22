import React, { Suspense } from 'react';
import ReactLoading from 'react-loading';


export const LazyLoader = ({ children }) => {
    return (
      <Suspense fallback={<FullScreenLoader/>}>{children}</Suspense>
    );
 };
 export const FullScreenLoader = ({ children }) => {
    return (
      <div className="centerElem"style={{zIndex:"200"}} >
         <div className="centerElemOverlay" style={{zIndex:"500"}}/>
         <div className="visibleBox"style={{zIndex:"1000"}}>
         
            <ReactLoading type={'spinningBubbles'} color=" '#004c70'" height={'20%'} width={'20%'} />
         </div>
      </div>
    )
 }