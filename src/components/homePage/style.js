import styled from 'styled-components'

export const MainImage = styled.img({
    width: '100%',
    height: '30rem',
    objectFit: 'cover',
    objectPosition: 'bottom center'
})

export const HomePageContainer = styled.div({

});

export const ImageContainer = styled.div({
    display: 'block',
})

export const ImageText = styled.h1({
    fontSize: '36px',
    lineHeight: '40px',
    color: '#fff',
    position: 'absolute',
    top: '20%',
    left: '40%',
    textAlign: 'center',
})

export const SearchBarWrapper = styled.div({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    width: '350px',
    position: 'absolute',
    top: '35%',
    left: '40%'
});


export const SearchInput = styled.input({
    border: 'none',
    flex: '1',
    fontSize: '16px',
    outline: 'none',
});

export const PropertyContainer = styled.div({
    display: 'grid',
    columnGap: '50px',
    gridTemplateColumns: 'auto auto auto',
    paddingLeft: '4rem',
});

export const FilterContainer = styled.form({
    margin: '1rem',
    cursor: 'pointer',
    display: 'grid',
    columnGap: '50px',
    gridTemplateColumns: 'auto auto auto',
    padding: '4rem',
    marginRight: '4rem'
});

export const FilterButtons = styled.div({
    '&:hover': {
        color: '#4abd77',
    }
});

export const FilterCard = styled.div({
    display: 'block',
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    height: 'auto',
    width: '384px',
    backgroundcolor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
});

