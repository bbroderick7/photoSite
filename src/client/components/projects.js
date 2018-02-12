'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
/*************************************************************************/
class BannerSelection extends Component {
  constructor(props){ super(props) }

  componentDidMount(){
	  let elem = ReactDOM.findDOMNode(this);
	  elem.style.opacity = 0;
    window.requestAnimationFrame(() => {
  		elem.style.transition = "opacity 1000ms";
  		elem.style.opacity = 1;
  	});
  }

  render(){
    document.title = "Brendan Broderick | Projects"
    return(
      <div className="row">
        <TitleBanner id="blackStarRentals-head" name="blackstar" nameAlt="blackstar1" description={["Rent bigger and better beds and futons in the Nashville area"]} folder={'projects'}/>
        <TitleBanner id="vUtensils-head" name="vUtensils" nameAlt="vUtensils1" description={["Make college cooking easy"]} folder={'projects'}/>
        <TitleBanner id="vmil-head" name="vmil" nameAlt="vmil1" description={["Improve patient experiences in clinical settings"]} folder={'projects'}/>
        <TitleBanner id="concertify-head" name="concertify" nameAlt="concertify1" description={["Build Spotify Playlists from your favorite band's recent concert setlists"]} folder={'projects'}/>
        <TitleBanner id="facePay-head" name="facePay" nameAlt="facePay1" description={["Use facial recognition software to make purchases with facial identification"]} folder={'projects'}/>
        <TitleBanner id="solitaire-head" name="solitaire" nameAlt="solitaire1" description={["Play klondike solitaire, create a user profile and save and compare game results"]} folder={'projects'}/>
      </div>
    )
  }
}

class Projects extends Component {
  constructor(props) { super(props) }

  render() {
    return(
      <div className="outerDiv contentDiv-secondary col-xs-12">
        <NavBar selector={"projects-navbar"}/>
        <BannerSelection/>
      </div>
    )
  }
}

export default withRouter(Projects);
