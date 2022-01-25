import React, {useEffect, useContext} from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './PaysLignes.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function PaysLignes(props) {

    const {dark} = useContext(DarkModeContext)

    const dispatch = useDispatch()

    const changeIndex = () => {
        dispatch({
            type: 'IDCHANGE', 
            payload: props.id
        })
    }
    
    const navigate = useNavigate()

    return <div onClick={() => {
        changeIndex()
        navigate(`/country/${props.name}`.replace(/\s+/g, '-').trim())
    }}>
        <div className={dark ? 'paysSolo-container-darkMode' : 'paysSolo-container'}>
            <div className='img-container'>
                <img src={props.flag} alt="flag" />
            </div>
            <p className='pays-name'>{props.name}</p>
            <p className='p-info'><span>Population</span> : {props.population}</p>
            <p className='p-info'><span>Region</span> : {props.region}</p>
            <p className='p-info'><span>Capital</span> : {props.capital}</p>
        </div>
    </div>;
}
