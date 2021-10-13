
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {


    const { loading, data:images } = useFetchGifs(category);






    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p>}
            <div className="card-grid animate__animated animate__zoomIn">


                {images.map(({ id, title, url, slug }) => {
                    return <GifItem key={id}
                        id={id} title={title} url={url} slug={slug} />

                })}


            </div>
        </>
    )
}
