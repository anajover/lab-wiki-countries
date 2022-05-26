import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountriesList() {
  const [countriesList, setCountriesList] = useState(null);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    setCountriesList(null);
    try {
      //   const response = await fetch(" https://ih-countries-api.herokuapp.com/countries")
      //   console.log("response de fetch", response)
      //   const responseJSON = await response.json()
      //   console.log(responseJSON)
      //   setCountriesList(responseJSON.results)
      // }catch(err) {
      //   console.log(err)
      // }
      const response = await axios.get(
        ' https://ih-countries-api.herokuapp.com/countries'
      );
      console.log(response.data);
      setCountriesList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (countriesList === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      {countriesList.map((eachCountry) => {
        return (
          <ul key={eachCountry.alpha3Code} className="list-group">
            <Link to={`/${eachCountry.alpha3Code}`} className="list-group-item">
              {eachCountry.name.common}
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default CountriesList;
