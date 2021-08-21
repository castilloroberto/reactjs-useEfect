import React from 'react'

export const Card = (props) => {
    const {Title,Hora} = props.item
    return (
        <div className="card m-2" style={{width:300,cursor:'pointer'}}>
            <div className="card-body">
                <h5 className="title">{Title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Hora: {Hora}</h6>
            </div>
        </div>
    )
}
