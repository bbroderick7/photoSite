import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { SubheaderNav }         from './subheaderNav';

class ProjectContent extends Component {
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
    return(
      <div className="col-xs-12 col-lg-10 project-container">
        <div className="col-xs-12 inner-proj-container">
          <div className='project-cover-cont'>
            <a href={this.props.github} target="_blank"><img className="banner-img-link"  src="http://computermentors.org/wp-content/uploads/2017/07/GitHub_Logo_White.png"/></a>
            <a href={this.props.link} target="_blank"><img className="banner-img-link-2" src="https://cdnjs.cat.net/ajax/libs/uswds/0.10.0/img/external-link.svg" /></a>
          </div>
          <img className="banner-img" src={this.props.projectBannerImage} />
        </div>
        <div className="col-xs-12 project-information">
          <h4><strong>Project:</strong> {this.props.properName}</h4>
          <h4 className="col-md-2 col-xs-12"><a href={this.props.github} target="_blank"><button className="btn btn-light"> <strong>Github</strong></button></a></h4>
          <h4 className="col-md-10 col-xs-12"><a href={this.props.link} target="_blank"><button className="btn btn-light"> <strong>Project Link </strong></button></a></h4>
          <h4><strong>Description:</strong> {this.props.description}</h4>
          <h4><strong>Technologies:</strong> {this.props.tech}</h4>
        </div>
      </div>
    )
  }
}

export class ProjectBody extends Component {
  constructor(props) { super(props) }

  render() {
    return(
      <div className="photo-container">
        <SubheaderNav selected={this.props.name} subheadings={["concertify", "facePay", "solitaire", "blackstar", "vutensils", "vmil"]}/>
        <ProjectContent
          name = {this.props.name}
          github = {this.props.github}
          link = {this.props.link}
          projectBannerImage = {this.props.projectBannerImage}
          properName = {this.props.properName}
          description = {this.props.description}
          tech = {this.props.tech}
          />
      </div>
    )
  }
}
