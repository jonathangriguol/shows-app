import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Show from '../Show'
import SkeletonCardList from '../SkeletonCardList'

const renderShowCard = eventOnClickShow => (show) => {
    return (
        <Grid item
            key={show.id}
            role="listitem"
            onClick={() => eventOnClickShow(show)}
            lg={3}
            md={4}
            sm={6}
            xs={12}>
                <Show show={show} />
        </Grid>
    )
}

const ShowList = ({showList, loading, onClickShow}) => {
    return (
        <div>
            <Grid container justifyContent="center" spacing={5}>
                {
                    loading ?
                        <SkeletonCardList count={6} />
                    :
                    showList.length > 0 &&
                        showList.map(show => renderShowCard(onClickShow)(show))
                        
                }
            </Grid>
        </div>
    )
}

ShowList.propTypes = {
    onClickShow: PropTypes.func.isRequired,
}

export default ShowList
