import React from 'react'
import { PerspectiveCamera, Scene, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial } from 'three'
import c from './intro.scss'

export default class Intro extends React.Component {
  constructor(...params) {
    super(...params)
    this.display = React.createRef()
  }

  componentDidMount() {
    const scene = new Scene()

    const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({
      color: 0x00ff00
    }))
    scene.add(cube);

    const display = this.display.current

    const camera = new PerspectiveCamera(75, display.clientWidth / display.clientHeight, 0.1, 1000)
    camera.position.z = 5;

    const renderer = new WebGLRenderer()
    renderer.setSize(display.clientWidth, display.clientHeight)
    display.appendChild(renderer.domElement)

    this.onWindowResize = () => {
      renderer.setSize(display.clientWidth, display.clientHeight)

      camera.aspect = display.clientWidth / display.clientHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', this.onWindowResize)

    function animate () {
      requestAnimationFrame(animate)

      cube.rotation.y += 0.01
      cube.rotation.x += 0.01

      renderer.render(scene, camera)
    }
    animate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
    this.onWindowResize = undefined
  }

  render() {
    return <div ref={this.display} className={c.intro}/>
  }
}