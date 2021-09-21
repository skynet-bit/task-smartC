import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Sidebar from './components/sidebar';
import Container from './components/container';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <Container />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
