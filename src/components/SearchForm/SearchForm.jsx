import React, { useState } from 'react'
import { styled, alpha } from '@material-ui/core/styles'
import { BiSearchAlt } from 'react-icons/bi'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'

const CustomButton = styled(Button)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 60,
    padding: '0 30px',
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.50),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.55),
        color: '#000',
    },
    '&:focus': {
        backgroundColor: alpha(theme.palette.common.white, 0.55),
        color: '#fff',
    },
    fontSize: 30,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    boxShadow: '0 5px 10px 8px rgba(255, 105, 135, .4)',
}))
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#FFF',
    fontSize: 30,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: '2em',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
                color: '#000'
            },
            '&:hover': {
                width: '20ch',
                color: '#000'
            },
        },
    },
}))
  
const SearchForm = ({onSearchHandler}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const search = (event) => {
        setSearchTerm(event.target.value)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        onSearchHandler(searchTerm)
    }

    return (
        <form onSubmit={submitSearch}>
            <Grid container item 
            justifyContent='center'
            style={{paddingBottom:60}}>
                <Search>
                    <SearchIconWrapper>
                        <BiSearchAlt />
                    </SearchIconWrapper>
                    <StyledInputBase
                        name="searchTerm"
                        placeholder="Search…"
                        onChange={search}
                        inputProps={{ 'aria-label': 'search' }} />
                    <CustomButton type="submit">Go!</CustomButton>
                </Search>
            </Grid>
        </form>
    )
}

export default SearchForm