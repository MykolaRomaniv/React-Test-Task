import React from 'react'
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='#' active>Account</NavigationItem> {/* bool can be passed without active={true}*/}
            <NavigationItem link='#'>Sign out</NavigationItem>
        </ul>
    )
}

export default navigationItems
