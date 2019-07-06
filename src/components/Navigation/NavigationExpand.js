import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Navigation.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Route from "./Navigation"; // Import regular stylesheet

class NavigationExpand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleMenu: {
                width: '',
                marginLeft: ''
            },
            styleContent: {
                marginLeft: ''
            }
        };
        this.closeSM = this.closeSM.bind(this);
        this.openSM = this.openSM.bind(this);
    }




    render() {
        return (
            <div>
                <div id="mySideMenu" className="sidemenu" style={this.state.styleMenu}>
                    <a href='#' className="close" onClick={this.closeSM} ref="close">
                        <i className="material-icons" style={{fontSize: 50, color: '#5b5b5b'}}> close </i>
                        <div className="sm-wrapper">
                            <a href='#'> HOME </a>
                            <a href='#'> PROJECT </a>
                            <a href='#'> SKILLS </a>
                            <a href='#'> CONTACT </a>
                        </div>
                    </a>
                </div>
                <div id="pg-content" style={this.state.styleContent}>
                    <div style={{fontSize: 70, cursor: 'pointer', color: '#5b5b5b'}}
                         onClick={this.openSM} ref="open"> &#8801; </div>
                    <h1>BESTE SHIT<br/><span>VAN TIM</span></h1>
                </div>
            </div>
        );
    }

    closeSM() {
        this.setState(() => ({ styleMenu: { width: '0px', marginLeft: '0px' } }));
        this.setState(() => ({ styleContent: { marginLeft: '0px' } }));
    }

    openSM() {
        this.setState(() => ({ styleMenu: { width: '450px', marginLeft: '0px' } }));
        this.setState(() => ({ styleContent: { marginLeft: '450px' } }));
    }

}

function Home() {
    return <h2>Home</h2>;
}
export default NavigationExpand
//style="font-size: 50px; cursor: pointer; color: #5b5b5b"

//
// const [anchorEl, setAnchorEl] = React.useState(null);
//
// function handleClick(event) {
//     setAnchorEl(event.currentTarget);
// }
//
// function handleClose() {
//     setAnchorEl(null);
// }

// return (
//     <div>
//         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//             <i className="material-icons" style={{ fontSize: 40 }}>
//                 reorder
//             </i>
//         </Button>
//         <Menu
//             id="simple-menu"
//             anchorEl={anchorEl}
//             keepMounted
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//
//         >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>My account</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//         </Menu>
//     </div>
// );


{/*<button className="close" onClick="closeSM()"> &times;</button>*/}
{/*<Router>*/}
{/*<div className="sm-wrapper">*/}
    {/*<Link to="/">HOME</Link>*/}
{/*<Link to="/">PROJECTS</Link>*/}
{/*<Link to="/">CURRICULUM</Link>*/}
{/*<Link to="/">CONTACT</Link>*/}
{/*<Route exact path="/" component={Home} />*/}
{/*</div>*/}
{/*</Router>*/}
