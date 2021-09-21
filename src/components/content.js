import React from "react";
import "../index.scss"
import Actor from "../assets/actor.png"
import Actor2 from "../assets/act2.png"
import Actor3 from "../assets/act3.png"
import Actor4 from "../assets/act4.png"
class Content extends React.Component {
    render() {
        return (
            <div className="contentCont ">
                <div className="leftCont chC">
                    <div className="actorImage"><img src={Actor} alt={"Actor"} /><div className="Pbtn">Preview</div></div>
                    <div className="textArea" contentEditable></div>
                </div>
                <div className="rightCont chC">
                    <div className="menu">
                        <div className="menuOpt active">Actor</div>
                        <div className="menuOpt">Voice</div>
                        <div className="menuOpt">Alignment</div>
                        <div className="menuOpt">Background</div>
                    </div>
                    <div className="mCont">

                        <div className="mImage"><img src={Actor2} alt={"acts"} /></div>
                        <div className="mImage"><img src={Actor3} alt={"acts"} /></div>
                        <div className="mImage"><img src={Actor4} alt={"acts"} /></div>
                        <div className="mImage"><img src={Actor3} alt={"acts"} /></div>
                        <div className="mImage"><img src={Actor4} alt={"acts"} /></div>
                        <div className="mImage"><img src={Actor} alt={"acts"} /></div>
                        <div className="mImage"><img src={Actor4} alt={"acts"} /></div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Content