import React  from 'react';
import './App.scss';
import Navigation from "./pages/Navigation";
import AboutUs from "./pages/AboutUs"
import Footer from "./pages/Footer"

class App extends React.Component {
    render() {
        return (
            <div>
                {<Navigation />} {<AboutUs/>} {<Footer />}
            </div>
        );
    }
}

export default App;
