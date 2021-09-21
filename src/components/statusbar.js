import React from 'react';
import '../index.scss';
class StatusBar extends React.Component {
    render() {
        return (
            <div className='StatusBar'>
                <div className='Status'>Login for more</div>
                <div className='Buttons'>
                    <div className='butCont'>
                        <div className="defBut">Cancel</div>
                        <div className="delBut">Cancel</div>
                        <div className="sucBut">Save</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default StatusBar