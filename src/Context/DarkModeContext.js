import React, {createContext, useState} from 'react';

export const DarkModeContext = createContext()

const DarkModeContextProvider = props => {
    const [dark, setDark] = useState(false);

    const toggleDark = () => {
        setDark(!dark)
        document.body.classList.toggle('bodyDark')
    }

    return (
        <DarkModeContext.Provider value={{dark, toggleDark}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}



export default DarkModeContextProvider