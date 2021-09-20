import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

import noimage from '../../assets/noimage.png'

const Show = ({ show, loading = false }) => {

    return (
        <Card elevation={5} sx={{ width: [100, 200, 300] }}>
            <CardActionArea>
                {
                    loading ? (
                        <Skeleton role="progressbar" animation="wave" variant="rect" height={380} />
                    ) : ( 
                        <CardMedia
                            component="img"
                            alt={show && show.name}
                            height={380}
                            image= {show && show.image != null ? show.image.medium : noimage}
                            xs={{maxHeight: 150}} />
                    )
                }
            
                <CardContent>
                    {
                        loading ? (
                            <React.Fragment>
                                <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </React.Fragment>
                        ) : ( 
                            <React.Fragment>
                                <Typography gutterBottom variant="h5">
                                {show && show.name}
                                </Typography>
                                <Grid item xs zeroMinWidth>
                                    <Typography data-testid="genre-test" noWrap>Genre: {show && show.genres.length > 0 ? show.genres.join(", ") : 'n/a'}</Typography>
                                </Grid>
                            </React.Fragment>
                        )
                    } 
                </CardContent>
            </CardActionArea>
        </Card> 
    )
}

Show.propTypes = {
    show: PropTypes.shape({
        score: PropTypes.number,
        show: PropTypes.shape({
            ida: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            language: PropTypes.string.isRequired,
            genres: PropTypes.array,
            status: PropTypes.string.isRequired,
            runtime: PropTypes.number.isRequired,
            averageRuntime: PropTypes.number.isRequired,
            premiered: PropTypes.string.isRequired,
            officialSite: PropTypes.string.isRequired,
            rating: PropTypes.shape({
                average: PropTypes.number,
            }),
            image: PropTypes.shape({
                medium: PropTypes.string,
                original: PropTypes.string,
            }),                
        }).isRequired
    })
}

export default Show
