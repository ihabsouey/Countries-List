import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'
import axios from 'axios'

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const getCountries = () => {
    axios.get('https://restcountries.com/v2/all?fields=name,capital,region,population,flags ')
      .then(response => {
        console.log(response.data);
        setCountries(response.data)
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
      <div className='filter'>
        <div className='search'>
          <FontAwesomeIcon id='search-icon' icon={faSearch} />
          <input type="text" value={country}  onChange={handleSearchChange} placeholder='Search for a country   ' />
        </div>
        <div>

          <select defaultValue='1' onChange={handleSelectChange}>
            <option key="f" selected disabled hidden>Filter by Region</option>
            <option key="All" value="">All</option>
            <option key="Africa" value="Africa">Africa</option>
            <option key="Americas" value="Americas">Americas</option>
            <option key="Asia" value="Asia" > Asia</option>
            <option key="Europe" value="Europe" >Europe</option>
            <option key="Oceania" value="Oceania">Oceania</option>
          </select>


        </div>

      </div>

      <div className='countries'>

        {countries
          .filter(country => country.region.includes(region))
          .filter(cc => cc.name.toLowerCase().includes(country.toLowerCase()))
          .map((c) => (


            <Card className='country'>
              <Card.Img height='150px' width="100%" src={c.flags.png} alt='flag' />
              <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'> {c.name}</Card.Title>
                <Card.Text >
                  <span>population :   </span> {c.population}  <br />
                  <span>  Region : </span> {c.region}<br />
                  <span>  Capital :  </span> {c.capital}

                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>

    </div>
  )
}
