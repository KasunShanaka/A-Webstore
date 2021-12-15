import React from 'react';
import style from './ProductPage.module.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Material UI components
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Navbar from '../../shared/Navbar/Navbar';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

//icons
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { stepClasses } from '@mui/material';

const ProductPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        // slidesToScroll: 1,
        swipeToSlide: true,
       
    };

    return (
        <div className={style.container}>
            <div className={style.navbar}>
                <Navbar />
            </div>
            <div className={style.body}>
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
                <div className={style.productSection}>
                    <div className={style.productImages}>
                        <div className={style.primaryImage}>
                            <img src="https://m.media-amazon.com/images/I/712xIu7XCSL._AC_SX466_.jpg" alt="" />
                        </div>
                        <div className={style.secondaryImages}>
                            <span className={style.image1}>
                                <img src="https://m.media-amazon.com/images/I/712xIu7XCSL._AC_SX466_.jpg" alt="" />
                            </span>
                            <span className={style.image1}>
                                <img src="https://m.media-amazon.com/images/I/712xIu7XCSL._AC_SX466_.jpg" alt="" />
                            </span>
                            <span className={style.image1}>
                                <img src="https://m.media-amazon.com/images/I/712xIu7XCSL._AC_SX466_.jpg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className={style.productInfo}>
                        <div className={style.specialNote}>
                            Happy Trials
                        </div>
                        <div className={style.productName}>
                            Rocking Horse
                        </div>
                        <div className={style.price}>
                            $78.87
                        </div>
                        <div className={style.rating}>
                            *********
                            <div className={style.reviewNote}>
                                Be the first one to review
                            </div>
                        </div>
                        <div className={style.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a eos vero consequatur unde! Quas id, aspernatur qui dignissimos quia veniam laboriosam doloremque illo, repellendus recusandae ducimus commodi nemo maiores! Quae hic doloremque dolor ab, error repellat. Natus unde nobis perferendis nemo nesciunt veniam officiis quae, debitis quidem ab dignissimos?
                        </div>
                        <div className={style.ageGroup}>
                            Age : 3-7 +
                        </div>
                        <div className={style.qty}>
                            <FormControl
                                fullWidth
                            >
                                <InputLabel
                                    variant="standard"
                                    htmlFor="uncontrolled-native">
                                    QTY
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={1}
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                        <div className={style.addToCart}>
                            <Button
                                variant="contained"
                            >Add To Cart</Button>
                        </div>
                        <div className={style.shareButtons}>
                            <ShareOutlinedIcon
                                fontSize='small'
                            />
                            <div className={style.shareTxt}>
                                Share
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.suggestions}>
                    <div className={style.suggestHeader}>
                        You might Also Like
                    </div>
                    <div className={style.carousel}>
                        <Slider className={style.slider} {...settings}>
                            <div className={style.cardWrapper}>
                                <div className={style.card}>
                                    <div className={style.cardImage}>
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-every-age-index-1572461597.png?crop=0.492xw:0.984xh;0,0&resize=640:*" alt="" />
                                    </div>
                                    <div className={style.sProductName}>
                                        Soft potato man
                                    </div>
                                    <div className={style.sProductCategory}>
                                        Puzzle
                                    </div>
                                    <div className={style.sProductPrice}>
                                        $19.78
                                    </div>
                                </div>
                            </div>
                            
                            <div className={style.cardWrapper}>
                                <div className={style.card}>
                                    <div className={style.cardImage}>
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-every-age-index-1572461597.png?crop=0.492xw:0.984xh;0,0&resize=640:*" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={style.cardWrapper}>
                                <div className={style.card}>
                                    <div className={style.cardImage}>
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-every-age-index-1572461597.png?crop=0.492xw:0.984xh;0,0&resize=640:*" alt="" />
                                    </div>
                                    <div className={style.sProductName}>
                                        Soft potato man
                                    </div>
                                    <div className={style.sProductCategory}>
                                        Puzzle
                                    </div>
                                    <div className={style.sProductPrice}>
                                        $19.78
                                    </div>
                                </div>
                            </div>
                            <div className={style.cardWrapper}>
                                <div className={style.card}>
                                    <div className={style.cardImage}>
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-every-age-index-1572461597.png?crop=0.492xw:0.984xh;0,0&resize=640:*" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={style.cardWrapper}>
                                <div className={style.card}>
                                    <div className={style.cardImage}>
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-every-age-index-1572461597.png?crop=0.492xw:0.984xh;0,0&resize=640:*" alt="" />
                                    </div>
                                    <div className={style.sProductName}>
                                        Soft potato man
                                    </div>
                                    <div className={style.sProductCategory}>
                                        Puzzle
                                    </div>
                                    <div className={style.sProductPrice}>
                                        $19.78
                                    </div>
                                </div>
                            </div>
                            <div className={style.cardWrapper}>
                                <div className={style.card}>
                                    <div className={style.cardImage}>
                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-every-age-index-1572461597.png?crop=0.492xw:0.984xh;0,0&resize=640:*" alt="" />
                                    </div>
                                </div>
                            </div>



                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
