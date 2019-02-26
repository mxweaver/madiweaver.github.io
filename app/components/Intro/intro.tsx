import React from 'react'
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshPhongMaterial,
  DirectionalLight
} from 'three'
import OrbitControls from 'three-orbitcontrols'
import c from './Intro.scss'

export default class Intro extends React.Component {
  display = React.createRef<HTMLDivElement>()
  renderer = new WebGLRenderer()
  camera?: PerspectiveCamera
  cube?: Mesh
  scene?: Scene

  componentDidMount() {
    this.scene = new Scene()

    const material = new MeshPhongMaterial({ color: 0xffffff, emissive: 0x444444 })

    this.cube = new Mesh(new BoxGeometry(1, 1, 1), material)
    this.scene.add(this.cube);
    this.scene.add(new DirectionalLight(0xffffff, 0.5))

    const display = this.display.current

    this.camera = new PerspectiveCamera(75, display.clientWidth / display.clientHeight, 0.1, 1000)
    this.camera.position.z = 5;

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(display.clientWidth, display.clientHeight)
    display.appendChild(this.renderer.domElement)

    new OrbitControls(this.camera, this.renderer.domElement)

    window.addEventListener('resize', this.onWindowResize)

    this.animate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  onWindowResize = () => {
    const { clientWidth: width, clientHeight: height } = this.display.current

    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  animate = () => {
    this.cube.rotation.y += 0.01
    this.cube.rotation.x += 0.005

    this.renderer.render(this.scene, this.camera)

    window.requestAnimationFrame(this.animate)
  }

  render() {
    return <div ref={this.display} className={c.intro} />
  }
}
