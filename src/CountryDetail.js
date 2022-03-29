import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import ReactLoading from 'react-loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'


export const CountryDetail = () => {
    let { name } = useParams();
    const [loading, setLoading] = useState(true)
    const [country, setcountry] = useState({});
    let urltype = 'name';
    
    // console.log(name)
    useEffect(() => {

        const getcountry = () => {
             if (name.length<=3)  urltype = 'alpha'  ; 
             console.log('https://restcountries.com/v3.1/'+urltype+'/'+ name);
            axios.get('https://restcountries.com/v3.1/' + urltype + '/' + name)
                .then(response => {
                    setcountry(response.data[0])
                    setLoading(false)

                });
        }
        getcountry();
    }, [name])

    if (loading) return <div className='Loading'>
        <h1>Loading</h1><br />
        <ReactLoading type="spin" color="#fff" />
    </div>
    return (
        <div>

            <Link to={'/Countries-List'} >
                <button className='backButton'>
                    <FontAwesomeIcon id='search-icon' icon={faArrowLeftLong} />
                    <span>&nbsp;&nbsp;Home</span>
                </button>
                <br />
            </Link>
            <div className='CountryDetail'>
                <div className='image'>
                    <img src={country.flags.png} alt='flag' />
                </div>
                <div className='description'>
                    <span className='name'>
                        {country.name.common}
                    </span>
                    <div className='descriptionBody'>
                        <div>
                            <span>Native name : </span> {Object.values(country.name.nativeName)[0].common} <br />
                            <span>Population :</span> {country.population}<br />
                            <span>Region :</span> {country.region}<br />
                            <span>Sub Region :</span> {country.subregion}<br />
                            <span>Capital :</span> {country.capital}
                        </div>

                        <div>
                            <span>Top Level Domain :</span> {country.tld}<br />
                            <span>Currency :</span> {Object.values(country.currencies)[0].name}<br />
                            <span> Official Language :</span> {Object.values(country.languages)[0]}  </div>
                    </div>
                    <div className='descriptionFooter'>
                        <span>Border Countries : </span>
                        {country.borders ?
                            country.borders.map((c) => (
                                <Link key={c} to={"/details/" + c} >
                                    <button className='borderButton' key={c}>  {c}  </button></Link>
                            ))
                            : <p>None   </p>}

                    </div>
                </div>



            </div>
        </div>

    )
}
