import React from 'react';
import Header from './component/common/Header';
import List from './component/List/List';
import ComponentLife from './component/Lifecycle/ComponentLife';
import NavBar from './component/NavBar/NavBar';
import About from './component/About/About';
import Home from './component/Home/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <NavBar />
                
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/list' component={List} />
                    <Route path='/home' component={Home} />
                    <Route component={NotFound} />
                </Switch>

            </BrowserRouter>


        </div>
    )
}
export default App;