import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { sizesStore } from './Utils/Store.js'

import App from './App.js'

export default class Camera {
    constructor() {
        this.app = new App()
        this.canvas = this.app.canvas

        this.sizesStore = sizesStore

        this.sizes = this.sizesStore.getState()

        this.setInstance()
        this.setControls()
        this.setResizeListner()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            1000
        );
        this.instance.position.z = 100;
        this.instance.position.y = 20;

    }


    setResizeListner() {
        this.sizesStore.subscribe((sizes) => {
            this.instance.aspect = sizes.width / sizes.height
            this.instance.updateProjectionMatrix()
        })
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true;
    }

    loop(deltaTime
    ) {
        this.controls.update()
        this.character = this.app.world.character?.rigidBody
        if (this.character) {

            const characterPosition = this.character.translation()
            const charaterRotation = this.character.rotation()

            const cameraOffset = new THREE.Vector3(0, 3, 15)
            cameraOffset.applyQuaternion(charaterRotation)
            cameraOffset.add(characterPosition)


            const targetOffset = new THREE.Vector3(0, 1, 1)
            targetOffset.add(characterPosition)

            if (this.app.world.character.character.position.z <= 0) {
                this.instance.position.lerp(cameraOffset, deltaTime * 5)

            }

            this.controls.target.lerp(targetOffset, deltaTime * 5)



        }
    }
}