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
import c from './intro.scss'

export default class Intro extends React.Component {
  constructor(...params) {
    super(...params)
    this.display = React.createRef()
  }

  componentDidMount() {
    const scene = new Scene()

    const material = new MeshPhongMaterial({ color: 0xffffff, emissive: 0x444444 })

    const cube = new Mesh(new BoxGeometry(1, 1, 1), material)
    scene.add(cube);

    scene.add(new DirectionalLight(0xffffff, 0.5))

    const display = this.display.current

    const camera = new PerspectiveCamera(75, display.clientWidth / display.clientHeight, 0.1, 1000)
    camera.position.z = 5;

    const renderer = new WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(display.clientWidth, display.clientHeight)
    display.appendChild(renderer.domElement)

    new OrbitControls(camera, renderer.domElement)

    this.onWindowResize = () => {
      renderer.setSize(display.clientWidth, display.clientHeight)

      camera.aspect = display.clientWidth / display.clientHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', this.onWindowResize)

    function animate() {
      requestAnimationFrame(animate)

      cube.rotation.y += 0.01
      cube.rotation.x += 0.005

      renderer.render(scene, camera)
    }
    animate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
    this.onWindowResize = undefined
  }

  render() {
    return <div ref={this.display} className={c.intro} />
  }
}
