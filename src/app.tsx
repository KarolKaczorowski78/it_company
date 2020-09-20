import React, { FunctionComponent, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home2';
import Services from './pages/services';
import About from './pages/about';
import Clients from './pages/clients';
import Contact from './pages/contact';
import EstimateProject from './pages/estimateProject';
import NotFound from './pages/notFound';
import Careers from './pages/careers';
import Navigation from './components/navigation/navigation';

const App: FunctionComponent = () => {

    const [scrollVal, setScrollVal] = useState<number>(window.scrollY);

    const handleScroll = () => {
        setScrollVal((s) =>  window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <div>
            <Router basename={ __dirname }>
                <Navigation scrollVal={ scrollVal } />
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/services" component={ Services } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/clients" component={ Clients } />
                    <Route exact path="/careers" component={ Careers } />
                    <Route exact path="/contact" component={ Contact } />
                    <Route exact path="/estimate-project" component={ EstimateProject } />
                    <Route exact component={ NotFound } />
                </Switch>
            </Router>
        </div>
    )
}

export default App