import React, { Component }     from 'react';

class SubheaderMobileNav extends Component {
  constructor(props){
    super(props)
    this.state = { open: false }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    if(this.state.open == false){
      document.getElementById("subheaderNav").style.height = "170px";
      this.setState({ open: true })
    }else{
      document.getElementById("subheaderNav").style.height = "0px";
      this.setState({ open: false })
    }
  }

  render(){
    let mytitle = this.state.open ?
                <h5 id="subheader-mobile-selection-header">{this.props.selected} <span className="downTriangle">&#9652;</span></h5>
              : <h5 id="subheader-mobile-selection-header">{this.props.selected} <span className="downTriangle">&#9662;</span></h5> ;
    let displayHeadings = this.props.displayHeadings.map(subheading => <a href= {subheading} ><h4 id={`${subheading}pics`}>{subheading}</h4></a>)
    return(
      <div className="col-xs-6">
        <div onClick={this.toggleNav} className="my-mobile-subheader-container"> {mytitle} </div>
        <div id="subheaderNav" className="my-mobile-subheader-overlay">
          <div className="my-mobile-subheader-overlay-content"> {displayHeadings} </div>
        </div>
      </div>
    )
  }
}

export class SubheaderNav extends Component {
  constructor(props) {
    super(props)
    this.state= { screenWidth: 0 }
    this.getSize = this.getSize.bind(this)
  }

  componentDidMount(){
    window.addEventListener("resize", this.getSize);
    let aa = document.getElementById(`${this.props.selected}pics`);
    if (aa != null) {
        aa.id = "selected-subheader";
    }
  }

  getSize(){ this.setState({ screenWidth: screen.width }) }

  render(){
    let subheaders = this.props.subheadings.map(subheading => <a href= {subheading} ><h3 id={`${subheading}pics`}>{subheading}</h3></a>);
    if(screen.width < 600){
      return(<SubheaderMobileNav displayHeadings={this.props.subheadings} selected={this.props.selected}/>)
    }else{
      return( <div className="col-md-2 subheader-nav"> { subheaders } </div> )
    }
  }
}
