import React from 'react';
import '../index.scss';
import StatusBar from './statusbar';
import Form from './form';
import Content from './content'
class Container extends React.Component {
    render() {
        return (
            <div className='Container'>
                <StatusBar />
                <Form />
                <Content />
            </div>
        );
    }
}
export default Container