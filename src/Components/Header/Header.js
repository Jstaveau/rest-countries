import './Header.css'
import React, {useContext} from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';

export default function Header() {
    
    const {dark, toggleDark} = useContext(DarkModeContext)

    return <header className={dark ? 'darkmode' : ''}>
        <div className='world'>
            <h1>Where in the world?</h1>
            <button className={dark ? 'btnDark' : 'whiteMode'} onClick={toggleDark}>{dark ? 'Light mode' : 'Dark mode'}</button>
        </div>
    </header>;
}
