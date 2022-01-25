import React, {useEffect} from 'react';
import PaysLignes from '../../Components/PaysLignes/PaysLignes';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {getPaysApi} from '../../redux/reducers/paysReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

    const dispatch = useDispatch()

    const {pays, value, filter} = useSelector(state => ({
        ...state.paysReducer, 
        ...state.inputReducer
    }))

    useEffect(() => {
        dispatch(getPaysApi())
    }, []);
    

    return <div>
        <SearchBar />
        <div className='all-countries'>
        {pays.map((item, index) => {
            if (item.name.toLowerCase().includes(value) && item.region.toLowerCase().includes(filter)) {
                return <PaysLignes 
                    id={index}
                    flag={item.flag}
                    name={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                    /> 
            }
        })}
        </div>
    </div>;
}
