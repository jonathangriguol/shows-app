import React, { useState, useEffect }  from 'react'
import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link as RouterLink } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

import noimage from './../../assets/noimage.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
})

const ShowDetails = () => {
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(null)

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    useEffect(() => {
        setShow(JSON.parse(localStorage.getItem('show')))
    }, [loading])

    return (
        <Grid container spacing={2} style={{marginTop:25}}>
            <Grid item xs={12} md={4}>
                {
                    loading ?
                    (
                        <Skeleton animation="wave" variant="rect" height={380} />
                    ) : (
                        <Img height={500} alt="complex" src={show && show.image != null ? show.image.original : noimage} />
                    )
                }
            </Grid>
            <Grid item xs={12} md={8} container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        {
                            loading ?
                            (
                                <React.Fragment>
                                    <Skeleton animation="wave" height={60} width="50%" style={{ marginBottom: 20 }} />
                                    <Skeleton width="70%" />
                                    <Skeleton width="70%" />
                                    <Skeleton width="70%" />
                                    <Skeleton width="40%" />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Typography gutterBottom variant="h2" component="div">
                                    {show && show.name}
                                    </Typography>
                                    <Typography variant="body2" component="div" gutterBottom>
                                        <div dangerouslySetInnerHTML={ {__html: show && show.summary} } />
                                    </Typography>
                                    <Typography variant="body2">
                                        Genre: {show && show.genres.length > 0 && show.genres.join(", ")}
                                    </Typography>
                                    <Typography variant="body2">
                                        Language: {show && show.language}
                                    </Typography>
                                    <Typography variant="body2">
                                        Watch: {show && show.url}
                                    </Typography>
                                    <br />
                                    <Button variant="outlined" 
                                        size="medium" 
                                        component={RouterLink}
                                        to="/">
                                        Go Back
                                    </Button>
                                </React.Fragment>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item>
                    {
                        loading ?
                        (
                            <Skeleton animation="wave" width={100} />
                        ) : (
                            <Typography variant="subtitle1" component="div">
                            {`Rating: ${show && show.rating.average ? show.rating.average : 'N/A'}`}
                            </Typography>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ShowDetails