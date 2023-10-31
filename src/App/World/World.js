import * as THREE from 'three'
import Physics from './Physics.js'
import Environment from './Environment.js'
import Character from './Character.js'
import AnimationController from './AnimationController.js'

import { appStateStore } from '../Utils/Store.js'
import App from '../App.js'


export default class World {
    constructor() {
        this.app = new App()
        this.scene = this.app.scene
       
        this.physics = new Physics()

        //create world classes
        const unsub = appStateStore.subscribe(state => {
            if (state.physicsReady && state.assetsReady) {
                this.environment = new Environment()
                this.character = new Character()
                this.animationController = new AnimationController()
                this.instantiate = true
                unsub()
            }
        })






        this.loop()
    }



    loop(deltaTime, elapsedTime) {
        this.physics.loop()
        if (this.character) this.character.loop(deltaTime)
        if (this.animationController) this.animationController.loop(deltaTime)
        if (this.environment) this.environment.loop(deltaTime)
    }
}