import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import AppFrame from './../components/AppFrame'
import Container from '@material-ui/core/Container'
import SearchForm from './../components/SearchForm'
import ShowList from './../components/ShowList'
import ShowService from './../services/ShowService'
import Typography from '@material-ui/core/Typography'

import mainBackground from '../assets/bg_large.jpg'

const ListWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    background: `linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url(${mainBackground}) repeat-y`,
    paddingTop: 80,
    paddingBottom: 80,
    marginBottom: 0,
    marginLeft: 0,
    width: '100%',
    minHeight: '100vh',
}))

const HeaderText = styled(Typography)({
    color: 'white',
})

const MainPage = () => {
    const didMountRef = useRef(false)
    const history = useHistory()

    const onClickHandler = (show) => {
        let persistedShow =  JSON.stringify(show)
        localStorage.setItem('show', persistedShow)

        history.push({
            pathname: `/show/${show.id}`,
            show
        })
    }

    const [query, setQuery] = useState('')
    const [allShows, setAllShows] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [noResults, setNoResults] = useState(false)

    const doSearch = (searchTerm) => {
        setNoResults(false)
        setQuery(searchTerm)
    }

    const setShows = async (query) => {
        try {
            setLoading(true)
            const response = await ShowService.searchShows(query)

            const { data } = response
            
            data.length > 0 ? setAllShows(data.map(item => item.show)) : setNoResults(true)

            setLoading(false)
        } catch (error) {
            if(error.response) {
                setError('Server error.')
            } else if(error.request) {
                setError('No internet conection.')
            } else {
                setError('Error getting data.')
            }
        }
    }

    useEffect(() => {
        if (didMountRef.current)
            setShows(query)
        else
            didMountRef.current = true
    }, [query])

    return (
        <AppFrame>
            <ListWrapper>
                <Container maxWidth="lg">
                    <HeaderText variant="h2" align='center' gutterBottom>
                        Unlimited series and movies
                    </HeaderText>
                    <HeaderText variant="h5" align='center' gutterBottom>
                        Subscribe and enjoy. Cancel whenever you want! 
                    </HeaderText>
                    <SearchForm onSearchHandler={doSearch}  />
                    <br />
                    {error && <Alert severity="error" onClose={() => setError(null)}>{error}</Alert>}

                    {
                        noResults ?
                            <HeaderText variant="h5" align='center' gutterBottom>
                                No results found, try again!
                            </HeaderText>
                            :
                            <ShowList showList={allShows} onClickShow={onClickHandler} loading={loading} />
                    }
                </Container>
            </ListWrapper>
        </AppFrame>
    )
}

export default MainPage
