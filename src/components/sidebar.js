import React from 'react';
import '../index.scss';
import Logo from '../assets/logo.png'
import Ic1 from '../assets/ic1.png'
import Ic2 from '../assets/ic2.png'
import UserIc from '../assets/useric.png'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Side">
                <div className="SideBar">
                    <div className="Logo"><img src={Logo} alt={"Logo"} /></div>
                    <div className="IcCont SecondSide">
                        <div> <img src={Ic1} alt={"Icon1"} /></div>
                        <div><img src={Ic2} alt={"Icon1"} /></div>

                    </div>
                    <div className="UcCont SecondSide">
                        <div><img src={UserIc} alt={"User Pic"} /> </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sidebar