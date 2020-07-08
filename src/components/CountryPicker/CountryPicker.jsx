import React, { useState, useEffect } from 'react';
import { NativeSelect, FromControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { countries } from '../../api';

const CountryPicker = () => {
    return (
        <FromControl>
            <NativeSelect className={styles.FromControl}>
                <option value='global'>Global</option>
            </NativeSelect>
        </FromControl>
    )
}

export default CountryPicker;