import React from "react";
import { connect } from "react-redux";
import { imageDeselect } from "../imagePreview/imageActions";
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const e: React.FC<{
  imageData: any;
  imageDeselect: (val: any) => any;
}> = function ImageDisplay({ imageData, imageDeselect }) {
  const images = imageData.map((image: string) => {
    return (
      <span className="close" onClick={() => imageDeselect(image)}>
        {" "}
        x<img style={style} width={500} height={300} src={image} />
      </span>
    );
  });
  return <div className="center-col">{images}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    imageData: state.images,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    imageDeselect: (val: any) => dispatch(imageDeselect(val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(e);
