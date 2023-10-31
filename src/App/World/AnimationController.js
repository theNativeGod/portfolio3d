import * as THREE from 'three'

import App from '../App'
import { inputStore } from '../Utils/Store'

export default class AnimationController {
    constructor() {
        this.app = new App()
        this.scene = this.app.scene
        this.avatar = this.app.world.character.avatar

        inputStore.subscribe((input) => this.onInput(input))

        this.instantiateAnimations()
    }

    instantiateAnimations() {
        this.mixer = new THREE.AnimationMixer(this.avatar.scene)
        this.animations = new Map()
        var i = 0
        this.avatar.animations.forEach((clip) => {
            this.animations.set(i, this.mixer.clipAction(clip))
            i++
        })

        //  is idle
        //2 is run
        // 13, 14 is dance
        // 16 is entrance
        // 17 is wait
        // 18 is walk 1c6bbead-9c31-43fa-b158-ab4f4fbffc12
        // console.log(this.avatar.animations)
        // this.animations.get(13).play()


    }

    onInput(input) {
        if (input.forward || input.backward || input.left || input.right) {
            // this.animations.get(13).stop()
            //walk
            this.animations.get(18).play()
        } else {
            this.animations.get(18).stop()
            //idle
            // this.animations.get(13).play()
        }
    }

    loop(deltaTime) {
        this.mixer.update(deltaTime * .8)
    }

}