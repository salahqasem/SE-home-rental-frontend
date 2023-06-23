import styled from 'styled-components'

export const SignContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
});
export const SignForm = styled.form({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '20rem',
});

export const Input = styled.input({
    width: '93%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
});

export const Button = styled.button({
    padding: '10px',
    backgroundColor: '#69d895',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background - color 0.3s ease',
    marginTop: '0.6rem',
    marginBottom: '0.6rem',
    '&:hover': {
        backgroundColor: '#4abd77',
    }
});

export const SignText = styled.a({
    color: '#69d895',
    cursor: 'pointer',
    '&:hover': {
        color: '#4abd77',
    }
});

export const RadioContainer = styled.div({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center'
})

export const RadioButton = styled.div({
    border: '1px solid #69d895',
    color: 'black',
    backgroundColor: (props) => (props.active === 'true' ? '#69d895' : 'white'),
    height: '3rem',
    width: '130px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    cursor: 'pointer'
})
