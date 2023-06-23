import styled from 'styled-components'

export const PropertyCard = styled.div({
    display: 'block',
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    minHeight: '470px',
    height: 'auto',
    width: '384px',
    backgroundcolor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
    marginBottom: '2rem'
});

export const PropertyImage = styled.img({
    height: '15rem',
    minHeight: '15rem',
    width: '92%',
    margin: '1rem',
})

export const PriceLabel = styled.label({
    color: 'black',
    fontSize: '34px',
    margin: '1rem',
});

export const InfoLabel = styled.label({
    color: 'black',
    fontSize: '24px',
});

export const InfoConatiner = styled.div({
    margin: '1rem'
});

export const StatusLabel = styled.div({
    color: (props) => props.status === 'ACTIVE' ? 'green' : props.status === 'PENDING' ? 'red' : 'gray',
    fontSize: '24px',
    margin: '1rem'
});

export const Icon = styled.img({
    height: '2rem',
    width: '2rem'
});

export const StatusContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '1rem'
});
