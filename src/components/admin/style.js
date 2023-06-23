import styled from 'styled-components'

export const UsersContainer = styled.div({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    border: 'none',
    cursor: 'pointer',
    height: '150px',
    width: '384px',
    backgroundcolor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
    marginBottom: '2rem',
    padding: '2rem'
});

export const TabelWrap = styled.div({
    fontFamily: '"Poppins", Arial, sans - serif',
    fontSize: '16px',
    lineHeight: '1.8',
    fontWeight: 'normal',
    background: '#f8f9fd',
    color: 'gray',
    marginTop: '4rem',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px 0px',
    borderRadius: '4px',
    backgroundcolor: 'rgb(255, 255, 255)',

});

export const Tabel = styled.table({
    minWidth: '1000px!important',
    width: '100%',
    background: '#fff',
    boxShadow: ' 0px 5px 12px - 12px rgba(0, 0, 0, 0.29)',
    marginBottom: '1rem',
    color: '#212529',
    borderCollapse: 'collapse',
    display: 'table',
    textIndent: 'initial',
    borderSpacing: '2px',
    borderColor: 'gray',
});

export const Thead = styled.thead({
    background: '#99b19c',
    boxSizing: 'border-box',
    display: 'table-header-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
});

export const Tr = styled.tr({
    display: 'table-row',
    verticalAlign: 'inherit',
    borderColor: 'inherit',
});

export const Th = styled.th({
    border: 'none',
    padding: '30px',
    fontSize: '13px',
    fontWeight: '500',
    color: 'white',
    verticalAlign: 'bottom',
    textAlign: 'inherit'
});

export const Tbody = styled.tbody({
    boxSizing: 'border-box',
    display: 'table-row-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
});

export const TrTabel = styled.tr({
    marginBottom: '10px',
    position: 'relative',
    border: '1px solid transparent',
    borderRadius: '0.25rem',
    display: 'table-row',
    verticalAlign: 'inherit',
});

export const Td = styled.td({
    border: 'none',
    padding: '30px',
    fontSize: '14px',
    background: '#fff',
    borderBottom: '4px solid #f8f9fd',
    verticalAlign: 'middle',
    display: 'table-cell',
});