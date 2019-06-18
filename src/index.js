import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import List from './components/List';

const tag = <h2>Hello</h2>;


const App = () => {
    return (
        <div>
            <Header 
                title = 'Hello world'
                message = 'Welcome React'
                userName = 'Name'
            />
            <List />
        </div>
    )
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
)