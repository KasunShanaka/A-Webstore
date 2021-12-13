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
// import NativeSelect from '@mui/material/NativeSelect';

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
                <div className={style.scrollArea}>
                    <div className={style.page}>
                        Home / All Toys
                    </div>
                    <div className={classnames(style.contentHeader, style.gap)}>
                        All Toys
                    </div>
                    <div className={style.body}>
                        <Sidebar />
                        <div className={style.contents}>
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
                            <div className={style.productsSection}>
                                <div className={style.leftspace}>
                                </div>
                                <div className={style.products}>
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.pName}>
                                            1200 pieces of jigsaw puzzle Lorem ipsum dolor sit amet.
                                        </div>
                                        <div className={style.pCategory}>
                                            Puzzle
                                        </div>
                                        <div className={style.pPrice}>
                                            $19.78
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={style.rightspace}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Body>
    )
}

export default ShoppingPage
