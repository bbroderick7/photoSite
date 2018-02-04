'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
/*************************************************************************/

class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    document.title = `Brendan Broderick | ${this.props.project.projectName}`;
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '../favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
    return(
      <div className="outerDiv contentDiv-secondary col-xs-12">
        <NavBar selector={"projects-navbar"}/>
        <ProjectBody
            name = {this.props.project.projectName}
            github = {this.props.project.projectGithub}
            link = {this.props.project.projectLink}
            projectBannerImage = {this.props.project.projectBannerImage}
            properName = {this.props.project.projectProperName}
            description = {this.props.project.projectDescription}
            tech = {this.props.project.projectTechnology}
          />
      </div>
    )
  }
}

export default withRouter(ProjectPage);
