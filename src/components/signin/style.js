import styled from 'styled-components'

export const RegisterContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
})

export const ForgetPasswordText = styled.a({
    color: 'black',
    marginTop: '0.6rem',
    cursor: 'pointer',
    '&:hover': {
        color: '#4abd77',
    }
})