import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { IconContext } from 'react-icons'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { BiCameraMovie } from 'react-icons/bi'

const AppFrame = ({ children }) => {
    return (
        <Grid container
            justifyContent="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link component={LinkRouter}
                            to="/" 
                            color="inherit" 
                            aria-label="menu">
                            <IconContext.Provider value={{size:'2em'}}>
                                <BiCameraMovie />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        TV SHOWS
                    </Typography>
                </Toolbar>
            </AppBar>
            {children}
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame
