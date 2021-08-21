import React,{useState} from 'react'

export const Creator = (props) => {

    const [Title, setTitle] = useState('')
    const [Hora, setHora] = useState('')
    const [Link, setLink] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        props.addItem({Title,Hora,Link})

        setTitle('')
        setHora('')
        setLink('')
    }
   

    return (
        <form onSubmit={handleSubmit} style={{width:'fit-content'}}>
            <label className="form-label">Titulo</label>
            <input  type="text" className="form-control" value={Title} 
                onChange={({target:{value}})=> setTitle(value)} />
            
            <label className="form-label">Hora</label>
            <input type="text" className="form-control" value={Hora} 
                onChange={({target:{value}})=> setHora(value)} />
            
            <label className="form-label">Link</label>
            <input type="text" className="form-control" value={Link}
                onChange={({target:{value}})=> setLink(value)} />

            <button className="btn btn-primary mt-2"
                onClick={handleSubmit}>
                Guardar
            </button>
        </form>
    )
}
