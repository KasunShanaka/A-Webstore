import React from 'react';
import style from './Sidebar.module.scss';

//components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {

    const [openPriceFilter, setOpenPriceFilter] = React.useState(false);
    const [openCategoryFilter, setOpenCategoryFilter] = React.useState(false);

    const handleCategoryFilter = () => {
        setOpenCategoryFilter(!openCategoryFilter);
    };

    const handlePriceFilter = () => {
        setOpenPriceFilter(!openPriceFilter);
    };


    return (
        <div className={style.container}>
            <div className={style.filterByTxt}>
                Filter By :
            </div>
            <div className={style.collapseMenu}>
                <div className={style.menuItemWrapper}>
                    <ListItemButton className={style.menuItem} onClick={handlePriceFilter}>
                        <div className={style.menuItemTitle} >
                            Price
                        </div>
                        <div className={style.rightArrowIcon}>
                            {openPriceFilter ? <ExpandLess /> : <ExpandMore />}
                        </div>
                    </ListItemButton>
                    <Collapse className={style.menuItemContents} in={openPriceFilter} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton className={style.menuItemContentsTxt} >
                                Price Filter
                            </ListItemButton>
                        </List>
                    </Collapse>
                </div>
                <div className={style.menuItemWrapper}>
                    <ListItemButton className={style.menuItem} onClick={handleCategoryFilter}>
                        <div className={style.menuItemTitle} >
                            Categories
                        </div>
                        <div className={style.rightArrowIcon}>
                            {openCategoryFilter ? <ExpandLess /> : <ExpandMore />}
                        </div>
                    </ListItemButton>
                    <Collapse className={style.menuItemContents} in={openCategoryFilter} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton className={style.menuItemContentsTxt} >
                                Price Filter
                            </ListItemButton>
                        </List>
                    </Collapse>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
