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
        <Card.Footer>
          <small className="text-muted">Created {this.props.created}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default ProjectCard;
