import React from 'react'
import { background, primaryText } from '../colors'
import Icon from './Icon'
import githubImage from '../images/github.png'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  title: {
    alignItems: 'center',
    backgroundColor: primaryText,
    color: background,
    display: 'flex',
    fontSize: '24pt',
    fontWeight: 'lighter',
    letterSpacing: '.75em',
    justifyContent: 'space-between',
    padding: '.5em 1em',
    borderRadius: '3px',
    marginBottom: '50px'
  },
  titleHeader: {
    display: 'block',
    marginRight: '-.75em',
  },
  titleSpacer: {
    width: '150px',
    position: 'relative',
    marginRight: '.75em',
    marginLeft: '.75em'
  },
  titleTrailer: {
    display: 'block',
    marginRight: '-.75em',
    textAlign: 'right'
  },
  icon: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto'
  },
  information: {
    textAlign: 'center',
    fontSize: '18pt',
    marginBottom: '30px',
    fontWeight: 'lighter'
  },
  line: {
    marginBottom: '10px'
  }
}

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <div style={styles.titleHeader}>maya</div>
        <div style={styles.titleSpacer}>
          <Icon style={styles.icon}/>
        </div>
        <div style={styles.titleTrailer}>vera</div>
      </div>
      <div style={styles.information}>
        <div style={styles.line}>Software Engineer in NYC</div>
        <div style={styles.line}>
          <a href="mailto:dev@mayavera.me">dev@mayavera.me</a>
          </div>
      </div>
      <div style={styles.links}>
        <a href="https://github.com/mayavera" target="_blank">
          <img src={githubImage} height="35px" width="35px"/>
        </a>
      </div>
    </div>
  )
}
