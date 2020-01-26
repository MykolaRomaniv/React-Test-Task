import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer];
    if (props.show) {
        attachedClasses.push(classes.Open);
    } else {
        attachedClasses.push(classes.Close);
    }
    return (  
        <Aux>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer
