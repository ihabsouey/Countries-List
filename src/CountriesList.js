import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CountriesList = ({ countries, region, country }) => {
    return (
        <div className='countries'>
            {countries
                .filter(country => country.region.includes(region))
                .filter(cc => cc.name.toLowerCase().includes(country.toLowerCase()))
                .map((c) => (
                    
                    <div key={c.name}  className='country'>
                        <Card key={c.name} >    <Link to={"details/" + c.name} >
                            <Card.Img height='150px' width="100%" src={c.flags.png} alt='flag' />
                        </Link>

                            <Card.Body className='cardBody'>
                                <Card.Title className='cardTitle'> {c.name}</Card.Title>
                                <Card.Text >
                                    <span>population :   </span> {c.population}  <br />
                                    <span>  Region : </span> {c.region}<br />
                                    <span>  Capital :  </span> {c.capital}

                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </div>
                )) } 
        </div>

    )

}
