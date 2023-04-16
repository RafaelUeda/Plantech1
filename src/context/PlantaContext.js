import React, { createContext } from 'react'
import plantas from '../data/plantas'

const PlantasContext = createContext({})

export const PlantasProvider = props => {
    return (
        <PlantasContext.Provider value={{
            state: {
                plantas
            }
        }}>
            {props.children} 
        </PlantasContext.Provider> 
    )
}

export default PlantasContext