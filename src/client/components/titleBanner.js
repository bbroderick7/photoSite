import React, { Component }     from 'react';

export class TitleBanner extends Component {
  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() { if(screen.width > 800) document.getElementById(this.props.nameAlt).style.height = "100%" }

  closeNav() { document.getElementById(this.props.nameAlt).style.height = "0%" }

  render() {
    let subHeads = "";
    if(this.props.subheaders != undefined){
      subHeads = this.props.subheaders.map(subhead => <a href={ `${this.props.id}/${subhead}` }><h4 className="col-xs-offset-1">{ subhead }</h4></a> );
    }
    let headerDescription = "";
    if(this.props.description != undefined){
      headerDescription = this.props.description.map(des => <h4 className="col-xs-offset-1">{ des }</h4>);
    }
    let name = this.props.name == 'portfolio' ? 'stills' : this.props.name
    let new_path = this.props.folder == undefined ? `${name}` : `${this.props.folder}/${name}`;
    return(
      <a href={ new_path }>
        <div id={this.props.name} className="col-lg-4 col-xs-12 landing-divs" onMouseEnter={this.openNav} onMouseLeave={this.closeNav}>
          <h2 className="vertical-heading">{this.props.name}</h2>
            <div id={this.props.nameAlt} className="title-modal">
              <div className="title-modal-content">
                <h2 className="vertical-heading inner-head">{ this.props.name }</h2>
                { subHeads }
                <h4> { headerDescription } </h4>
              </div>
            </div>
          </div>
        </a>
    )
  }
}
