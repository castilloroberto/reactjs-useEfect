import React,{useState,useEffect} from 'react'
import { Card } from './components/Card'
import { Creator } from './components/Creator'

function App() {

  const [Items, setItems] = useState([])

  useEffect(() => {
    
    const json = localStorage.getItem('links')

    if(json !== null && json !== "[]"){

      console.log('json parse',json,typeof(json));
      setItems(JSON.parse(json))

    } else {

      console.log('datos default');
      setItems([{
        Title:'Creador de esta app',
        Hora:'1:00PM',
        link:'https://github.com/castilloroberto'
      }])
      
    }
  }, []) // solo se ejecuta una vez 

  useEffect(() => {
    
      localStorage.setItem('links',JSON.stringify(Items))
   
  }, [Items]) // se ejecuta cada vez que "Items" cambia



  const addItem = (item)=>{
    setItems([item,...Items])
  }

  const renderItems = ()=>{
    return Items.map( (item,i) => <Card key={i.toString()} item={item}/> )
  }
  return (
    <div>
      <nav className="nav p-2" style={{backgroundColor:'#333',color:'white'}}>
        <h3>Todo App</h3>  
      </nav>

      <div className='container mt-4'>
        <div className="row row-cols-2">
       
          <Creator addItem={addItem}/>

          <div className="list">
            {
              renderItems()
            }
          </div>        
        </div>
        

      </div>
    </div>
  );
}

export default App;
