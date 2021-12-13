import React from 'react';
import style from './Sidebar.module.scss';

//components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <div className={style.container}>
            <ListItemButton onClick={handleClick}>
                Inbox
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton >
                        Inside
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={handleClick}>
                Inbox
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton >
                        Inside
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    )
}

export default Sidebar
