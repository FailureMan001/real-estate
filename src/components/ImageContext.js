import React, {createContext} from 'react'

import {imageData} from '../data';

export const ImageContext = createContext()

const ImageContextProvider = ({children}) => {
    // const [id, setId] = useState(imageData)
    // const [imgs, setImages] = useState(imageData)

    // console.log(imgs)

  return (
    <ImageContext.Provider value={{imageData}}>
        {children}
    </ImageContext.Provider>
  )
}

export default ImageContextProvider