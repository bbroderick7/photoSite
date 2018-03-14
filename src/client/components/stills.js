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
    setTimeout(() => { window.requestAnimationFrame(() => {
  		    elem.style.transition = "opacity 1000ms";
  		    elem.style.opacity = 1;
  	  }) }, 0);
  }

  render(){
    document.title = "Brendan Broderick | Stills"
    return(
      <div className="row">
        <TitleBanner id="peru-head" name="peru" nameAlt="peru1" description={["Cordillera Blanca", "Streets", "Markets"]} folder={'stills'}/>
        <TitleBanner id="bolivia-head" name="bolivia" nameAlt="bolivia1" description={["Chicha", "Amazon", "Cochabamba"]} folder={'stills'}/>
        <TitleBanner id="deloche-head" name="deloache" nameAlt="deloache1" description={["Vanderbilt Deloache Award, 2015"]} folder={'stills'}/>
        <TitleBanner id="moab-head" name="moab" nameAlt="moab1" description={["Dessert"]} folder={'stills'}/>
        <TitleBanner id="jackson-head" name="jackson" nameAlt="jackson1" description={["Tetons"]} folder={'stills'}/>
        <TitleBanner id="colorado-head" name="colorado" nameAlt="colorado1" description={["Maroon Bells", "RMNP"]} folder={'stills'}/>
        <TitleBanner id="nashville-head" name="nashville" nameAlt="nashville1" description={["Midtown", "Broadway"]} folder={'stills'}/>
        <TitleBanner id="exp-head" name="experiment" nameAlt="exp1" description={["nature & perspective"]} folder={'stills'}/>
      </div>
    )
  }
}

class Stills extends Component {
  constructor(props) { super(props) }

  render() {
    return(
      <div className="outerDiv contentDiv-secondary col-xs-12">
        <NavBar selector={"stills-navbar"}/>
        <BannerSelection/>
      </div>
    )
  }
}

export default withRouter(Stills);
