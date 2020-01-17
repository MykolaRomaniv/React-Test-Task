import React from 'react'
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import classes from './DashboardHeader.module.scss';

const dashboardHeader = (props) => {
    return (
        <div className={classes.top}>
        <h1>My Dashboard</h1>
        <Button variant="outlined" color="primary" startIcon={<AddIcon />} onClick={props.editorOpened}>
          Create App
        </Button>
    </div>
    )
}

export default dashboardHeader
