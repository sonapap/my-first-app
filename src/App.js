import React from 'react';
import Header from './components/common/Header';
import List from './components/List/List';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Detail from './components/detail/Detail';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={List} exact />
                        <Route path="/currency/:id" component={Detail} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;