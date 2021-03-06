// @flow

export const getImagePath = (filename: string) =>
  `${
    process.env.REACT_STATIC_ENV === 'development' ? '' : '/orbita'
  }/assets/images/${filename}`

export const getAudioPath = (filename: string) =>
  `${
    process.env.REACT_STATIC_ENV === 'development' ? '' : '/orbita'
  }/assets/audio/${filename}`
