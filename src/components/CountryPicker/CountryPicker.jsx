import React, { useState, useEffect } from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI()
    }, [setFetchedCountries]);
    console.log(fetchedCountries)

    return (
        <FormControl >
            <NativeSelect className={styles.fromControl}>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl >
    )
}

export default CountryPicker;