import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Show from '../Show'

const SkeletonCardList = ({ count }) => {
    return Array(...Array(count ? count : 1)).map((el,index) => {
        return (
            <Grid item
                key={`data-${index}`} 
                onClick={() => {}}
                lg={3}
                md={4}
                sm={6}
                xs={12}>
                    <Show show={null} loading />
            </Grid>        
        )
    })
}

Show.propTypes = {
    count: PropTypes.number,
}

export default SkeletonCardList