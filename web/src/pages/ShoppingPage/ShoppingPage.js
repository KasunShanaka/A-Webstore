import React from 'react';
import style from './ShoppingPage.module.scss';

import { useState } from 'react';

//components
import Body from '../../shared/Body/Body';
import Sidebar from '../../shared/Sidebar/Sidebar';
import Navbar from '../../shared/Navbar/Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ShoppingPage = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Body>
            <div className={style.container}>
                <div className={style.navBar}>
                    <Navbar />
                </div>
                <div className={style.body}>
                    <Sidebar />
                    <div className={style.contents}>
                        <div className={style.contentHeader}>
                            All Toys
                        </div>
                        <div className={style.filterSection}>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={age}
                                    onChange={handleChange}
                                    label="Age"
                                    size='small'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>

            </div>
        </Body>
    )
}

export default ShoppingPage
