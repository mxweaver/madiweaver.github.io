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
//@ts-ignore
import OrbitControls from 'three-orbitcontrols'
import animate, { WrappedProps } from '../../hoc/animate'
import c from './Intro.scss'

class Intro extends React.Component<WrappedProps> {
  private display = React.createRef<HTMLDivElement>()
  private renderer = new WebGLRenderer()
  private camera?: PerspectiveCamera
  private cube?: Mesh
  private scene?: Scene

  public componentDidMount() {
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
    this.props.onReady()
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  private onWindowResize = () => {
    const { clientWidth: width, clientHeight: height } = this.display.current

    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  public componentDidUpdate(prevProps: WrappedProps) {
    if (this.props.step !== prevProps.step) {
      this.cube.rotation.y += 0.01
      this.cube.rotation.x += 0.005

      this.renderer.render(this.scene, this.camera)
    }
  }

  public render() {
    return <div ref={this.display} className={c.intro} />
  }
}

export default animate(Intro)
