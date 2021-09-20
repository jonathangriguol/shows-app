import React from 'react'
import { styled } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Show from '../Show'
import SkeletonCardList from '../SkeletonCardList'
import Typography from '@material-ui/core/Typography'

const HeaderText = styled(Typography)({
    color: 'white',
})

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
                    showList.length > 0 ?
                        showList.map(show => renderShowCard(onClickShow)(show))
                        :
                        <HeaderText variant="h5" align='center' gutterBottom>
                            No results found, try again!
                        </HeaderText>
                }
            </Grid>
        </div>
    )
}

ShowList.propTypes = {
    onClickShow: PropTypes.func.isRequired,
}

export default ShowList
