import { useEffect, useState } from "react"

function Home () {
    
    const [show, setShow] = useState(false)
    
    return (
        <div>
          
          <button  onClick={()=> setShow(!show)}/>
          {show && <Mostre />}  
        </div>


        
    )
}
        
        const Checksize = () => {
            
        const [size, setsize] = useState()
            setsize(window.innerWidth);
            
        
        useEffect (() => {
            const [size, setsize] = useState(window.innerWidth);
            window.addEventListener("resize", Checksize);
            return () => {
                window.removeEventListener("resize", Checksize);
            }
        })
        setShow(!show)


    }
    function Mostre () {
        const [size, setsize] = useState()
        return(
        <div>
            <h1> Window</h1>
            <h2> Size: {size}</h2>
        </div>
)



    }




