import React from 'react'
import { background, primaryText } from '../colors'

const styles = {
  icon: {
    backgroundColor: background,
    borderRadius: '100%',
    width: '130px',
    height: '130px'
  },
  circle: {
    backgroundColor: primaryText,
    border: `5px solid ${background}`,
    borderRadius: '100%',
    position: 'absolute',
  },
  smallCircle: {
    width: '20px',
    height: '20px',
    bottom: '10px',
    left: '10px'
  },
  mediumCircle: {
    width: '40px',
    height: '40px',
    bottom: '15px',
    left: '30px'
  },
  largeCircle: {
    width: '80px',
    height: '80px',
    top: '0px',
    right: '-9px'
  }
}

export default function Icon({ style }) {
  return (
    <div style={{...styles.icon, ...style}}>
      <div style={{...styles.circle, ...styles.smallCircle}}/>
      <div style={{...styles.circle, ...styles.mediumCircle}}/>
      <div style={{...styles.circle, ...styles.largeCircle}}/>
    </div>
  )
}
