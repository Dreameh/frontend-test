import * as React from "react";
import {Card} from "react-bootstrap";

class ProjectCard extends React.Component {

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProjectCard;
