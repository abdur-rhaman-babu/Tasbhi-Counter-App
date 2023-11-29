/* eslint-disable no-unused-vars */
    import { useEffect, useState } from 'react';
    import './Tasbhi.css';

    const Tasbhi = () => {
    const [subhanallah,setSubhanallah] = useState (0);
    const [alhamdullah,setAlhamdullah] = useState (0);
    const [allahuakbar,setAllahuakbar] = useState (0);
    const [totalValue,setTotalValue] = useState(0);

    // const countSuhanallah = ()=>{
    //     subhanallah < 33 && setSubhanallah (prevValue=>prevValue +1)
    // }

    // const countAlhamdullah = ()=>{
    //      subhanallah < 33 || alhamdullah < 33 && setAlhamdullah (prevValue=>prevValue +1)
    // }

    // const countAllahuakbar = ()=>{
    //     alhamdullah < 33 || allahuakbar <34 && setAllahuakbar (prevValue=>prevValue +1)
    // }

    useEffect(()=>{
     setTotalValue(subhanallah+alhamdullah+allahuakbar)

    },[subhanallah,alhamdullah,allahuakbar])

    const resetButton = ()=>{
                setSubhanallah(prevValue=>prevValue=0)
                setAlhamdullah(prevValue=>prevValue=0)
                setAllahuakbar(prevValue=>prevValue=0)
    }


    return (
        
      <div className='container'>
        <div  className='main-content'>
            <div><h2 style={{color:'#2c3e50',marginBottom:'5px',fontFamily:'sans-serif'}}>Tasbih Counter App</h2></div>
           <div className='total-count'> <h3> Total: {totalValue}</h3></div>

           <div className='tasbhi-content'>
                <div className='subhanallah-card global-card'>
                    <p>33</p>
                <h6 className='count-tasbih'>{subhanallah}</h6>
            <button className='global-btn' onClick={()=>(subhanallah < 33 && setSubhanallah (prevValue=>prevValue +1))}>سبحان الله</button>
                </div>
            
            <div className='alhamdulillah-card global-card'>
            <p>33</p>
            <h6 className='count-tasbih'>{alhamdullah}</h6>
            <button className='global-btn' onClick={()=>(subhanallah < 33 || alhamdullah < 33 && setAlhamdullah (prevValue=>prevValue +1))}>الحمد لله</button>
            </div>

            <div className='allahuakbar-card global-card'>
            <p>34</p>
            <h6 className='count-tasbih'>{allahuakbar}</h6>
            <button className='global-btn' onClick={()=>(alhamdullah < 33 || allahuakbar <34 && setAllahuakbar (prevValue=>prevValue +1))}>الله أكبر</button>
            </div>
            
            </div>
            <div>
            <button className='res-btn' onClick={resetButton}>Reset</button>
            </div>
            
        </div>
        </div>
         
    );
};

export default Tasbhi;

