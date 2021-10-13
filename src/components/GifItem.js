
import React from 'react'

export const GifItem = ({id,title,url,slug}) => {
    return (
            <div className="card">
                   
                    <img src={url} alt={id}></img>
                    <p>{title}</p>
                    </div>
    )
}
