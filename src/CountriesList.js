import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CountriesList = ({ countries, region, country }) => {
    const removeIsrael = countries.filter(country => country.name.toLowerCase() !== 'israel' )    
    const filtredByRegion = removeIsrael.filter(country => country.region.includes(region))
    const filtredByName = filtredByRegion.filter(cc => cc.name.toLowerCase().includes(country.toLowerCase()))

    return (
        <div >
            <br />
            {filtredByName.length > 0 ?
                region ?
                    <h2>In {region} we have {filtredByRegion.length} countries :) </h2>
                    : <h2>In the world we have {filtredByRegion.length} countries</h2>
                : <h2> Check the country name </h2>
            }
            <div className='countries'>
                {filtredByName.map((c) => (

                    <div key={c.name} className='country'>
                        <Card key={c.name} >    <Link to={"details/" + c.name} >
                            <Card.Img height='150px' width="100%" src={c.flags.png} alt={c.name + 'flag'} />
                        </Link>

                            <Card.Body className='cardBody'>
                                <Card.Title className='cardTitle'>  <h2>{c.name} </h2></Card.Title>
                                <ul>

                                    <li>   <span>population :   </span> {c.population}   </li>
                                    <li>    <span>  Region : </span> {c.region} </li>
                                    <li>   <span>  Capital :  </span> {c.capital} </li>
                                </ul>
                            </Card.Body>

                        </Card>
                    </div>
                ))}
            </div>

        </div>
    )
}
