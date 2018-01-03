import React, { Component }     from 'react';

export class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    let aa = document.getElementById(this.props.selector);
    if (aa != null) {
        aa.children[0].id = "selected-subheader";
    }
  }

  render(){
    return(
      <div>
        <div className="row typewriter-container">
          <div className="col-lg-6 col-xs-12">
            <h1>brendan broderick.</h1>
          </div>
        </div>
        <div className="row">
          <div id="stills-navbar" className="col-sm-offset-1 col-lg-2 col-xs-3 landing-subheader">
            <a href="/stills"><h3>Stills</h3></a>
          </div>
          <div id="projects-navbar" className="col-lg-2 col-xs-3 landing-subheader">
            <a href="/projects"><h3>Projects</h3></a>
          </div>
          <div id="about-navbar" className="col-lg-2 col-xs-3 landing-subheader">
            <a href="/about"><h3>About</h3></a>
          </div>
        </div>
      </div>
    )
  }
}
