import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export const Filter = ({ country, handleSearchChange, handleSelectChange }) => {
    return (
        <div className='filter'>
            <div className='search'>
                <FontAwesomeIcon id='search-icon' icon={faSearch} />
                <input type="text" value={country} onChange={handleSearchChange} placeholder='Search for a country   ' />
            </div>
            <div>

                <select defaultValue='1' onChange={handleSelectChange}>
                    <option key="f" value='1' disabled hidden>Filter by Region</option>
                    <option key="All" value="">All</option>
                    <option key="Africa" value="Africa">Africa</option>
                    <option key="Americas" value="Americas">Americas</option>
                    <option key="Asia" value="Asia" > Asia</option>
                    <option key="Europe" value="Europe" >Europe</option>
                    <option key="Oceania" value="Oceania">Oceania</option>
                </select>


            </div>

        </div>
    )
}
