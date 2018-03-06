// @flow

import React, {type ComponentType} from 'react'

const styles = {
  wrapper: {
    position: 'relative',
  },
  invisible: {
    visibility: 'hidden',
  },
  reset: {
    top: 0,
    left: 0,
  },
}

const DisplaceAbsolute = (
  position: 'absolute' | 'fixed',
  Component: ComponentType<*>,
  style: Object,
  wrapperStyle?: Object
) => () => (
  <div style={{...styles.wrapper, ...wrapperStyle}}>
    <Component style={styles.invisible} />
    <Component style={{...style, ...styles.reset, position}} />
  </div>
)

export default DisplaceAbsolute
