import { useState } from 'react';
import imagejson from './image.json';
function Carousel() {
    const [isPause,setIsPause] =useState<boolean>(false);
    const [activeimage,setActiveImage] =useState <number>(0) 


    const autoplay=():void=>{
        console.log("hell");
        
        
         setInterval(()=>{
            setActiveImage(activeimage+1)
            // if(activeimage<imagejson.data.length){
            //     console.log("helijl");
            //     setActiveImage(activeimage+1)
            // }

            // if (activeimage===(imagejson.data.length-1)) setActiveImage(0);
            },5000)
       
    }
    
    const playAndPause=():void=>{
        
        if(isPause){
            setIsPause(false)
            
        }else{
            autoplay()
            setIsPause(true)
        }
    }

    const changeIndex=(index:number):void=>{
            setActiveImage(index)
       
    }

    const navigation=(next:boolean):void=>{
        if(activeimage<=(imagejson.data.length-1)){
            if(next){
                setActiveImage(activeimage+1)
            }else{
                if(!(activeimage===0)) setActiveImage(activeimage-1);
            }
        }

        if (activeimage===(imagejson.data.length-1)) setActiveImage(0);

    }


    return (
    <div className='container'>
        <div className="left-container">
            <div className="banner-img">
                <img src={imagejson?.data?.[activeimage]?.image} className='header-img' alt="" />
            </div>
            <div className='carousal'>
                <div onClick={()=>navigation(false)} style={{cursor:'pointer', margin:'10px'}}>{'<'}</div>
                <div className="carousal-img">
                      {imagejson.data.map((res: any,index:number)=>{
                        return <div key={index} className='img-index' onClick={()=>changeIndex(index)} >
                            <img src={res?.image} className='header-img' alt="" style={{
                            border:index===activeimage ? '1px solid black':'',
                            padding:index===activeimage ? '2px':'',
                            borderRadius:index===activeimage ? '1rem':'',
                        }} />
                        </div>
                        })} 
                </div>
                <div onClick={()=>navigation(true)} style={{cursor:'pointer', margin:'10px'}}>{'>'}</div>
            </div>
            
        </div>
        <div className="right-container">
            <div className="content">
                <h2 className='title'>{imagejson?.data?.[activeimage]?.content?.title}</h2>
                <p>{imagejson?.data?.[activeimage]?.content?.description}</p>
            </div>

            <div className="play-btn" onClick={()=>playAndPause()}>
                {!isPause && <img src="/playPng.png" alt="" /> }
                {isPause && <img src="/pausePng.png" alt="" /> }
                
            </div>
        </div>
        

       
    </div>
  )
}

export default Carousel