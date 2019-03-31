import React from 'react';
import ReactDOM from 'react-dom';

import data from './data/data';
import Header from './components/Header';

const showNames = () => {
    console.log('this is show names');
    // let showDiv = document.getElementById('show').innerHTML(<Header />);
    return(
         <div>
            <h2>Hello </h2>
            <Header /> 
        </div>
    );
};
const App = () => {
    
    return (
        <div className="namelist">
        <h2>CLick on the button to show the name listing!</h2>
        <button onClick={showNames}>Click Here</button>
        <div id="show"></div>
        <Header/>
        </div>
        );
       
};

ReactDOM.render(<App />, document.getElementById('root'));

