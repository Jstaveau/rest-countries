import './PaysSolo.css'
import React, {useEffect, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {DarkModeContext} from '../../Context/DarkModeContext'

export default function PaysSolo() {

    const {dark} = useContext(DarkModeContext)

    const dispatch = useDispatch()

    const {pays, id} = useSelector(state => ({
        ...state.paysReducer
    }))
    
    const changeIndex = (newId) => {
        dispatch({
            type: 'IDCHANGE', 
            payload: newId
        })
    }

    const navigate = useNavigate()

    return <div className={dark ? 'pays-solo color-white' : 'pays-solo'}>
        <button className={dark ? 'btndark' : 'btnwhite'} onClick={() => navigate('/')}>Back</button>
        {pays.map((item, index) => {
            if (index == id) {
                return (
                    <div className='pays-container'>
            <div className='div-img'>
                <img src={item.flag} alt="contry-flag" />
            </div>
            <div className='pays-text'>
                <h2>{item.name}</h2>
                <div className='infos'>
                    <p><span>Native name : </span>{item.name}</p>
                    <p><span>Population : </span>{item.population}</p>
                    <p><span>Region : </span>{item.region}</p>
                    <p><span>Sub Region : </span>{item.subregion}</p>
                    <p><span>Capital : </span>{item.capital}</p>
                    <p><span>Top Level Domain : </span>{item.topLevelDomain}</p>
                    <p><span>Currencies : </span>{item.currencies[0].name ? item.currencies[0].name : 'undefined'}</p>
                    <p><span>Languages : </span>{item.languages ? item.languages.length < 2 ? item.languages[0].name : item.languages.map((i, index) => { 
                        if (index < item.languages.length -1) {
                            return i.name + ', '
                        } else {
                            return i.name
                        }
                        }) : 'undefined'}</p>
                </div>
                <div className='border-countries'>
                    <span>Border countries : </span>
                    {pays[id].borders ? pays.map((item, index) => {
                        if (pays[id].borders.includes(item.alpha3Code)) {
                            return <button className={dark ? 'btndark' : 'btnwhite'} 
                            onClick={() => {
                                changeIndex(index)
                                navigate(`/country/${item.name}`.replace(/\s+/g, '-').trim())}}>{item.name}</button>
                        }
                    }) : 'none'}
                </div>
            </div>
        </div>
                )
            }
        })}
    </div>;
}
