import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { CountriesList } from './CountriesList'
import { Filter } from './Filter'
import ReactLoading from 'react-loading'

export const Countries = () => {
  const [loading, setLoading] = useState(true)

  const [countries, setCountries] = useState([]);
  const getCountries = () => {
    axios.get('https://restcountries.com/v2/all?fields=name,capital,region,population,flags ')
      .then(response => {
        setCountries(response.data);
        setLoading(false)

      });
  }
  useEffect(() => getCountries(), [])

  const [region, setRegion] = useState('');
  const handleSelectChange = (e) => {
    setRegion(e.target.value)
  }

  const [country, setCountry] = useState('');
  const handleSearchChange = (e) => {
    setCountry(e.target.value)
  }


  return (
    <div>
      <Filter
        country={country}
        handleSearchChange={handleSearchChange}
        handleSelectChange={handleSelectChange} />
      {!loading ?
        <CountriesList
          countries={countries}
          region={region}
          country={country} />
        : <div className='Loading'>
          <h1>Loading</h1>
          <br/>
          <ReactLoading type="spin" color="#fff" />
        </div>
      }
    </div>
  )
}
