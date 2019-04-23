import React, { Component } from "react";
import axios from "axios";

import AppCamera from "./AppCamera";
import AppButton from "./AppButton";
import AppImage from "./AppImage";

class App extends Component {
  state = {
    firstPhoto: "",
    secondPhoto: "",
    thirdPhoto: "",
    timestamp: ""
  };

  sendToS3 = (data, name) => {
    axios
      .post(process.env.REACT_APP_BE_PATH_TO_UPLOAD, {
        photo: data,
        name
      })
      .then(r => r)
      .catch(e => console.error("UPLOAD ERROR => ", e));
  };

  initCamera = () => {
    const video = document.querySelector("video");

    const canvasOverlay = document.getElementById("canvas-overlay");
    const canvasOverlayCtx = canvasOverlay.getContext("2d");
    canvasOverlay.width = video.offsetWidth;
    canvasOverlay.height = video.offsetHeight;

    const img = new Image();
    img.src = "face_overlay.png";
    img.width = video.offsetWidth;
    img.height = video.offsetHeight;

    img.onload = () => {
      canvasOverlayCtx.drawImage(img, 0, 0, img.width, img.height);
    };
  };

  onCameraStart = setTimeout(this.initCamera, 3000);

  onTakePhoto = dataUri => {
    const { firstPhoto, secondPhoto, timestamp } = this.state;
    const takePhotoBtn = document.getElementById("outer-circle");

    const takePhoto = () =>
      setTimeout(() => takePhotoBtn && takePhotoBtn.click(), 300);

    if (!firstPhoto) {
      const ts = Date.now();
      this.setState({ firstPhoto: dataUri, timestamp: ts });
      this.sendToS3(dataUri, `normal_${ts}`);
      takePhoto();
    } else if (!secondPhoto) {
      this.setState({ secondPhoto: dataUri });
      this.sendToS3(dataUri, `white_${timestamp}`);
      takePhoto();
    } else {
      this.setState({ thirdPhoto: dataUri });
      this.sendToS3(dataUri, `black_${timestamp}`);
    }
  };

  openInNewTab = data => () => {
    const newWindow = window.open();
    newWindow.document.write(`<img src="${data}" width="100%">`);
  };

  render() {
    const { firstPhoto, secondPhoto, thirdPhoto, timestamp } = this.state;

    return (
      <div
        className="app"
        style={{ backgroundColor: secondPhoto ? "#000" : "#fff" }}
      >
        {firstPhoto && !thirdPhoto && (
          <div
            className="overlay"
            style={{ backgroundColor: secondPhoto ? "#000" : "#fff" }}
          />
        )}
        <h1 className="app-title">Next Photo</h1>
        {!thirdPhoto && (
          <AppCamera
            onTakePhoto={this.onTakePhoto}
            onCameraStart={this.onCameraStart}
          />
        )}
        {firstPhoto && !thirdPhoto && (
          <p className="announcement">Taking photo...</p>
        )}
        {thirdPhoto && (
          <div className="images-wrapper">
            <div
              className="images-wrapper__item"
              style={{ marginRight: "15px" }}
            >
              <AppImage src={firstPhoto} />
              <AppButton
                title={`normal_${timestamp}`}
                onClick={this.openInNewTab(firstPhoto)}
              />
            </div>
            <div
              className="images-wrapper__item"
              style={{ marginRight: "15px" }}
            >
              <AppImage src={secondPhoto} />
              <AppButton
                title={`white_${timestamp}`}
                onClick={this.openInNewTab(secondPhoto)}
              />
            </div>
            <div className="images-wrapper__item">
              <AppImage src={thirdPhoto} />
              <AppButton
                title={`black_${timestamp}`}
                onClick={this.openInNewTab(thirdPhoto)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
