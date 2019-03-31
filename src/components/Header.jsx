import React from 'react';
import data from '../data/data';

const Header = () => {
    const numrows = data.map(datas => {
        return(
            <li key={datas.id} className={datas.address}>{datas.name}</li>
        );
    });
    return (
        <div>{numrows}</div>
    );
}
export default Header;