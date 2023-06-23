import styled from 'styled-components'

export const Overlay = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
    zIndex: 999
});

export const Content = styled.div({
    position: 'absolute',
    width: '500px',
    height: '300px',
    top: '200px',
    left: '500px',
    right: '500px',
    bottom: '200px',
    border: '1px solid #ccc',
    background: 'white',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
});

export const Header = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export const ListContainer = styled.div({
    minHeight: '10rem',
});

export const ListName = styled.label({
    color: 'black',
    fontSize: '24',
    paddingLeft: '1rem'
});

