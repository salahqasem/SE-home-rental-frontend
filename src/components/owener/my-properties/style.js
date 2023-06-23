import styled from 'styled-components'

export const PropertyCard = styled.form({
    display: 'block',
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    height: '42rem',
    width: '384px',
    backgroundcolor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
    marginBottom: '2rem',
    padding: '2rem'
});

export const Container = styled.div({
    display: 'flex',
    justifyContent: 'space-between'
})