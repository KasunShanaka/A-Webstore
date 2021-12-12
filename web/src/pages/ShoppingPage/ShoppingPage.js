import React from 'react';
import style from './ShoppingPage.module.scss';

import { useState } from 'react';
import classnames from 'classnames';

//components
import Body from '../../shared/Body/Body';
import Sidebar from '../../shared/Sidebar/Sidebar';
import Navbar from '../../shared/Navbar/Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';

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
                        <div className={classnames(style.contentHeader, style.gap)}>
                            All Toys
                        </div>
                        <div className={style.filterSection}>
                            <div className={style.selectBox}>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
                                    <Select
                                        // defaultValue={10}
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={age}
                                        onChange={handleChange}
                                        label="Age"
                                    >
                                        {/* <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem> */}
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Body>
    )
}

export default ShoppingPage
