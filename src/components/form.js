import React from 'react';
import '../index.scss';
class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      display1: true,
    };
  }
  handleClick = e => {
    this.setState({
      display1: !this.state.display1,
    })
    document.querySelector(".FormCont").style.display = "none"
    changeOpacity(".SecondSide")
    changeOpacity(".Buttons")
    document.querySelector(".contentCont").style.display = "flex"
    document.querySelector(".Status").innerHTML = "Welcome lorem"
  }
  render() {
    const { display1 } = this.state;
    const style = display1 ? {} : { display: "none" };
    return (
      <div className='FormCont' style={style}>
        <form className='Form'>

          <p>Email Address</p>
          <input
            type="text"
          /><br />
          <div className="pFP"><div className='Pass'>Password</div> <div className='ForgotPass'>Forgot Password</div></div>
          <input
            type="Password"
          />
          <div className='Login'><div className="ButL" onClick={this.handleClick} >Login</div></div>
        </form>
      </div >
    );
  }
}
function changeOpacity(className) {
  var elems = document.querySelectorAll(className);
  var index = 0, length = elems.length;
  for (; index < length; index++) {
    elems[index].style.transition = "opacity 0.5s linear 0s";
    elems[index].style.opacity = 1;
  }
}
export default Form