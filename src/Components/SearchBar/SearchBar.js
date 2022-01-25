import './SearchBar.css'
import React from 'react';
import loupe from './loupe.png'
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';

export default function SearchBar() {

    const {pays, value, filter} = useSelector(state => ({
        ...state.paysReducer, 
        ...state.inputReducer
    }))

    const dispatch = useDispatch()

    const changeValeur = (e) => {
        dispatch({
            type: 'VALUE', 
            payload: e
        })
    }
    const changeFilter = (a) => {
        dispatch({
            type: 'FILTER', 
            payload: a
        })
    }

    return <div className='searchBar'>
        <div className='input-search'>
            <img src={loupe} alt='loupe' />
            <input onChange={(e) => changeValeur(e.target.value)} value={value} placeholder='Search for a country' type="text" />
        </div>
        <select onChange={(e) => changeFilter(e.target.value)} name="region" id="region">
            <option value=''>All regions</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europa">Europa</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>;
}
