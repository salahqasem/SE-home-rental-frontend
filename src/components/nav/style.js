import styled from 'styled-components'

export const Nav = styled.nav({
    alignItems: "center",
    display: "flex",
    height: "4rem",
    width: "100%",
    zIndex: "low",
    backgroundColor: 'white',
    justifyContent: 'space-between'
});

export const NavText = styled.a({
    color: 'balck',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '2rem',
    cursor: 'pointer'
});
