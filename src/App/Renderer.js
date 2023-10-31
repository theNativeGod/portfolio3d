import * as THREE from 'three'
import { sizesStore } from './Utils/Store.js'
import App from './App.js'

export default class Renderer {

    constructor() {
        this.app = new App()
        this.canvas = this.app.canvas
        this.camera = this.app.camera
        this.scene = this.app.scene
        this.sizesStore = sizesStore
        this.sizes = this.sizesStore.getState()
        this.setInstance()
        this.setResizeListener()

    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(this.sizes.pixelRatio);
        this.instance.shadowMap.enabled = true

    }

    setResizeListener() {
        this.sizesStore.subscribe((sizes) => {
            this.instance.setSize(sizes.width, sizes.height)
            this.instance.setPixelRatio(this.sizes.pixelRatio)
        })
    }

    loop(deltaTime) {
        this.instance.render(this.scene, this.camera.instance)
    }
}