import React from 'react'
import ReactCrop from 'react-image-crop'

export default class ImageCrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onComplete(crop) {
    console.log(crop)
  }

  render() {
    const crop = {
      x: 0,
      y: 0,
      width: 100,
      aspect: 4/3
    }

    return (
      <ReactCrop
        src="peru-landscape.jpg"
        crop={crop}
        minWidth={30}
        minHeight={30}
        keepSelection
        onComplete={this.onComplete}
      />
    )
  }
}
