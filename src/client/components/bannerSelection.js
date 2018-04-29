'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
/*************************************************************************/
export class BannerSelection extends Component {
  constructor(props){ super(props) }

  componentDidMount(){
	  let elem = ReactDOM.findDOMNode(this);
	  elem.style.opacity = 0;
    window.requestAnimationFrame(() => {
  		elem.style.transition = "opacity 1000ms";
  		elem.style.opacity = 1;
  	});
  }

  getProjectBanners(){
    document.title = "Brendan Broderick | Projects";
    return this.props.info.projectNames.map(name => <TitleBanner
                  id=          {this.props.info.projects[name].id}
                  name=        {this.props.info.projects[name].name}
                  nameAlt=     {this.props.info.projects[name].nameAlt}
                  description= {this.props.info.projects[name].description}
                  folder=      {this.props.info.projects[name].folder}/>)
  }

  render(){ return( <div className="row"> {this.getProjectBanners()} </div> ) }
}
