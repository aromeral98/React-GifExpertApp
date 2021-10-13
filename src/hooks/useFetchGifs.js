import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setState(
                    {
                        data: imgs,
                        loading: false
                    }
                )

            })

    }, [category])

    // setTimeout(()=>{
    //     setState({
    //         data:[123,4141,3,41,1,31],
    //         loading:false
    //     })
    // },3000)
    return state
}