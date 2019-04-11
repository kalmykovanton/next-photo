import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const AppCamera = ({ onTakePhoto }) => <Camera onTakePhoto={onTakePhoto} />;

export default AppCamera;
