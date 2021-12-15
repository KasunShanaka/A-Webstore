import React from 'react';
import style from './ShoppingPage.module.scss';

import { useState } from 'react';
import classnames from 'classnames';

//shared components
import Body from '../../shared/Body/Body';
import Sidebar from '../../shared/Sidebar/Sidebar';
import Navbar from '../../shared/Navbar/Navbar';

//Material UI components
// import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const ShoppingPage = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (

        <div className={style.container}>
            <div className={style.navBar}>
                <Navbar />
            </div>
            <Body>
                <div className={style.leftSpace}>

                </div>
                <div className={style.scrollArea}>
                    <div className={style.path}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                MUI
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/getting-started/installation/"
                            >
                                Core
                            </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>
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
                                <div className={style.products}>
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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
                                    <div className={style.product}>
                                        <div className={style.productImg}>
                                            <img src="https://img.etimg.com/thumb/msid-81643604,width-1440,height-1080,imgsize-151435,resizemode-8,quality-100/small-biz/sme-sector/no-kidding-india-gears-up-to-create-its-own-toy-story.jpg" alt="" />
                                        </div>
                                        <div className={style.productInfo}>
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

                                </div>
                                <div className={style.pagination}>
                                    <Pagination count={5} size="small" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <div className={style.customerService}>
                            <div className={style.footerHeader}>
                                Customer Service
                            </div>
                            <div className={style.links}>
                                <div className={style.aboutLink}>
                                    About
                                </div>
                                <div className={style.contactLink}>
                                    Contact
                                </div>
                                <div className={style.newsLink}>
                                    News and Events
                                </div>
                            </div>
                        </div>
                        <div className={style.visitOurStore}>
                            <div className={style.footerHeaderStore}>
                                Visit Our store
                            </div>
                            <div className={style.storeInfo}>
                                <div className={style.Link}>
                                    45 Kenry Road, <br />
                                    San Francisco, CA <br />
                                    (415) 291 763 242
                                </div>
                                <br />
                                <div className={style.openDays}>
                                    Monday - Friday 9:00 - 5:00 <br />
                                    Weekends 10:00 - 3:00
                                </div>
                            </div>
                        </div>
                        <div className={style.connectWithUs}>
                            <div className={style.footerHeaderContact}>
                                Contact with us
                            </div>
                            <div className={style.socialMedia}>
                                <span className={style.instagram}>
                                    <InstagramIcon></InstagramIcon>
                                </span>
                                <span className={style.facebook}>
                                    <FacebookIcon
                                    ></FacebookIcon>
                                </span>
                                <span className={style.twitter}>
                                    <TwitterIcon></TwitterIcon>
                                </span>
                                <span className={style.pinterest}>
                                    <PinterestIcon/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.rightSpace}>

                </div>
            </Body>
        </div>

    )
}

export default ShoppingPage
