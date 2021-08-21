import React,{useState,useEffect} from 'react'

export const Counter = () => {


    const [counter, setCounter] = useState(0)

    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log('useEffect '+counter);
        document.title = 'useEffect '+counter
    })
    
    const handleClick = (e)=>{
        setCounter(counter + 1)
    } 

    return (
        <div 
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh',
                flexDirection:'column'
            }}>
                <h2>Counter: {counter}</h2>
                <button
                    onClick={handleClick} 
                    className="btn btn-primary">Aumentar</button>

                <button
                    onClick={()=> setShow(!show)} 
                    className="btn btn-primary mt-4">{ show ? 'Esconder' : 'Mostrar'}</button>
                
            {show && <Cuadrado/>}
        </div>
    )
}

function Cuadrado() {
    const [color, setColor] = useState('orange')

    useEffect(() => {
        function onMouseMove(e) {
            if(e.clientX < (window.innerWidth / 2))
                setColor('orange')
            else
                setColor('blue')

        }

        window.addEventListener('mousemove',onMouseMove)
        console.log('Ejecutando');
        
        return ()=>{
            console.log('limpiando');
            window.removeEventListener('mousemove',onMouseMove)
        }

    })
    console.log("ocurrio un render");

    return (
        <div className="mt-2" style={{height:500,width:500,backgroundColor:color}} >

        </div>
    )


}