import styled from 'styled-components'

export const OfferContainer = styled.div({
    display: 'flex',
    margin: '4rem',
    justifyContent: 'space-between'
})

export const PropertyImage = styled.img({
    height: '430px',
    width: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
});

export const PropertyInfo = styled.form({
    height: '430px',
    width: '30%',
    paddingLeft: '4rem',
    paddingRight: '10rem',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
});

export const TextArea = styled.textarea({
    width: '93%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '10rem'
})