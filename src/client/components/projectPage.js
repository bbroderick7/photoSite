'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="outerDiv contentDiv col-xs-12">
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
