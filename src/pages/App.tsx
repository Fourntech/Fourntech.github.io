import React  from 'react';
import Container from 'react-bootstrap/Container';

import Navigation from "./Navigation";
import AboutUs from "./AboutUs"
import Footer from "./Footer"

class App extends React.Component {
    render() {
        return (
        <div>
            <header>
                {<Navigation />}  
            </header>
            <main>
                {<AboutUs />} 
            </main>
            {<Footer />} 
        </div>
        );
    }
}

export default App;