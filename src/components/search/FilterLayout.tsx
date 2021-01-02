import React, { createRef, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUsers, filterByName, reset } from "../imagePreview/imageActions";
import ImageDisplay from "./ImageDisplay";
import ResultPane from "./ResultPane";
const e: React.FC<{
  fetchUsers: () => any;
  reset: () => any;
  filter: (val: any) => any;
}> = function FilterLayout({ fetchUsers, reset, filter }) {
  const fetchUserCallBack = useCallback(() => {
    fetchUsers();
  }, []);

  const textInput = createRef<HTMLInputElement>();

  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select Category</Form.Label>
                <Form.Control as="select" onChange={fetchUserCallBack} custom>
                  <option>car</option>
                  <option>van</option>
                  <option>bicycle</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Image Preview</h3>
            <ImageDisplay />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            Filters
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  ref={textInput}
                />
              </InputGroup>
            </div>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="tag"
                  aria-label="tag"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <Row>
              <Col>
                <Button
                  onClick={() => filter(textInput.current.value)}
                  variant="success"
                >
                  Filter
                </Button>{" "}
              </Col>

              <Col>
                <Button onClick={reset} variant="primary">
                  Clear
                </Button>{" "}
              </Col>
            </Row>
          </Col>
        </Row>
        <ResultPane />
      </Container>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userData: state.users,
    imageData: state.images,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    reset: () => dispatch(reset()),
    filter: (val: any) => dispatch(filterByName(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(e);
