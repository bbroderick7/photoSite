import React, { Component }     from 'react';

export class SubheaderNav extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    let aa = document.getElementById(`${this.props.selected}pics`);
    if (aa != null) {
        aa.id = "selected-subheader";
    }
  }

  render(){
    let subheaders = this.props.subheadings.map(subheading => <a href= {subheading} ><h3 id={`${subheading}pics`}>{subheading}</h3></a>)
    return( <div className="col-md-3 subheader-nav"> { subheaders } </div> )
  }
}
