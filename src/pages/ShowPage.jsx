import React from 'react'
import AppFrame from '../components/AppFrame'
import Container from '@material-ui/core/Container'
import ShowDetails from '../components/ShowDetails'

const ShowPage = ({show}) => {
    return (
        <AppFrame>
            <Container maxWidth="lg">
                <ShowDetails show={show} />
            </Container>
        </AppFrame>
    )
}

export default ShowPage
