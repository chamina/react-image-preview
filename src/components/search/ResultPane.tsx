import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { imageSelect } from "../imagePreview/imageActions";

const ResultPane: React.FC<{
  userData: any;
  fetchImage: (val: any) => any;
}> = function ResultPane({ userData, fetchImage }) {
  return (
    <div>
      <Row>
        <Col xs={3} style={{ paddingTop: "36px" }}>
          <ListGroup>
            {userData.map((user: any, index: any) => (
              <ListGroup.Item
                onClick={() => {
                  fetchImage(user.download_url);
                }}
                key={index}
              >
                {user.author}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchImage: (val: any) => dispatch(imageSelect(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPane);
