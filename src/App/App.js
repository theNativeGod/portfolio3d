import * as THREE from 'three'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Loop from './Utils/Loop.js'
import World from './World/World.js'
import Resize from './Utils/Resize.js'
import InputController from './UI/InputController.js'
import AssetLoader from './Utils/AssetLoader.js'
import Preloader from './UI/Preloader.js'
import GUI from './UI/GUI.js'
import ModalManager from './UI/ModalManager.js'

let instance = null

export default class App {
    constructor() {
        if (instance) return instance
        instance = this

        window.ModalManager = new ModalManager()

        // three js elements
        this.canvas = document.querySelector("canvas.threejs");
        this.scene = new THREE.Scene()

        // Asset Loader
        this.assetLoader = new AssetLoader()
        this.preloader = new Preloader()

        this.inputController = new InputController()

        // Camera and renderer
        this.camera = new Camera()
        this.renderer = new Renderer()

        // World
        this.world = new World()

        // extra utils
        this.loop = new Loop()
        this.resize = new Resize()

        // tweakpane
        this.gui = new GUI()
    }
}