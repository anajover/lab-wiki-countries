import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);

  const { id } = useParams();
  console.log(id);

  const getCountriesDetails = async () => {
    setCountryDetails(null);
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${id}`
      );
      console.log(response.data);
      setCountryDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('id ha cambiado', id);
    getCountriesDetails();
  }, [id]);

  if (countryDetails === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h3>Capital: {countryDetails.capital}</h3>
      <hr />
      <p>Area: {countryDetails.area} Km2</p>
      <hr />
      Border:{' '}
      {countryDetails.borders.map((eachBorder) => {
        return <li>{eachBorder}</li>;
      })}
    </div>
  );
}

export default CountryDetails;
