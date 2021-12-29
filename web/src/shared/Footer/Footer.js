import React from 'react';
import style from './Footer.module.scss';


//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div className={style.container}>
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
                            <PinterestIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
