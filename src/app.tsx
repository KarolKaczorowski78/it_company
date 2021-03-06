import React, { FunctionComponent, useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
// import Clients from './pages/specs';
import EstimateProject from './pages/estimateProject';
import NotFound from './pages/notFound';
// import Specialists from './pages/careers';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';

const App: FunctionComponent = () => {

    const [scrollVal, setScrollVal] = useState<number>(window.scrollY);

    const handleScroll = () => {
        setScrollVal(() =>  window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <Router basename={ __dirname }>
            <Navigation scrollVal={ scrollVal } />
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={ Home }  />
                <Route exact path="/services" component={ Services } />
                <Route exact path="/about" component={ About } />
                {/* <Route exact path="/clients" component={ Clients } /> */}
                {/* <Route exact path={ `${__dirname}/specialists` } component={ Specialists } /> */}
                <Route exact path="/estimate-project" component={ EstimateProject } />
                <Route exact component={ NotFound } />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App