import * as THREE from 'three'
import App from '../App.js'

export default class Loop {
    constructor() {
        this.app = new App()
        this.camera = this.app.camera
        this.renderer = this.app.renderer
        this.world = this.app.world
        this.clock = new THREE.Clock()
        this.previousTime = 0
        this.loop()

    }

    loop() {

        const currentTime = this.clock.getElapsedTime()
        const deltaTime = currentTime - this.previousTime
        this.previousTime = currentTime
        this.world.loop(deltaTime, currentTime)
     
        this.camera.loop(deltaTime)
        this.renderer.loop(deltaTime)
        window.requestAnimationFrame(() => this.loop())
    }
}