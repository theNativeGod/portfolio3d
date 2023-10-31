import * as THREE from 'three'

import App from '../App.js'
import assetStore from '../Utils/AssetStore.js'
import Pillar from './Pillar.js';
import ModalContentProvider from '../UI/ModalContentProvider.js';

export default class Environment {
    constructor() {
        this.app = new App()
        this.scene = this.app.scene
        this.physics = this.app.world.physics
        // this.pane = this.app.gui.pane
        this.modalContent = new ModalContentProvider()


        this.assetStore = assetStore.getState()
        this.environment = this.assetStore.loadedAssets.environment
        this.background = this.assetStore.loadedAssets.city
        this.iron_man = this.assetStore.loadedAssets.iron_man
        this.iron_manScene = this.iron_man.scene
        this.sunMap = this.assetStore.loadedAssets.sun
        this.iphone = this.assetStore.loadedAssets.iphone
        this.macbook = this.assetStore.loadedAssets.macbook
        this.car = this.assetStore.loadedAssets.car
        this.tesseract = this.assetStore.loadedAssets.tesseract

        this.iphoneScene = this.iphone.scene
        this.macbookScene = this.macbook.scene
        this.carScene = this.car.scene
        this.tesseractScene = this.tesseract.scene

        this.loadEnvironment()
        this.addLights()
        this.addGround()
        this.addMeshes()
        this.addPillars()
    }

    loadEnvironment() {
        const environmentScene = this.environment.scene

        environmentScene.scale.setScalar(.048)

        // this.pane.addBinding(
        //     environmentScene, 'rotation',
        //     { min: -Math.PI, max: Math.PI, step: .01 }
        // );

        // const scale = { value: .06 }

        // this.pane.addBinding(
        //     scale, 'value', {
        //     min: 0, max: .07, step: .0001,
        // }
        // ).on('change', () => environmentScene.scale.setScalar(scale.value)
        // )

        this.scene.add(environmentScene)

        this.scene.background = this.background
        this.iron_manScene.scale.setScalar(100)
        this.iron_manScene.position.set(22, 2, -35)
        this.iron_manScene.rotation.y = -.4
        this.scene.add(this.iron_manScene)








        environmentScene.traverse((obj) => {
            if (obj.isMesh) {
                obj.castShadow = true

            }
        })

        // add text

        // const loader = new FontLoader();

        // loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

        //     const geometry = new TextGeometry('Hello three.js!', {
        //         font: font,
        //         size: 80,
        //         height: 5,
        //         curveSegments: 12,
        //         bevelEnabled: true,
        //         bevelThickness: 10,
        //         bevelSize: 8,
        //         bevelOffset: 0,
        //         bevelSegments: 5
        //     });
        // });

        // const material = new THREE.MeshBasicMaterial({ color: 'white' })

        // this.textMesh = new THREE.Mesh(geometry, material)

        // this.scene.add(this.textMesh)

    }


    addLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, .1)
        this.scene.add(ambientLight)

        this.directionalLight = new THREE.DirectionalLight('white', 3)
        this.directionalLight.position.set(40, 40, 40)
        this.directionalLight.castShadow = true
        this.scene.add(this.directionalLight)
    }

    addGround() {
        const groundGeometry = new THREE.BoxGeometry(100, 1, 100)
        const groundMaterial = new THREE.MeshStandardMaterial({ color: 'turquoise', visible: false, wireframe: true })
        this.groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
        this.groundMesh.position.y = -.5
        this.scene.add(this.groundMesh)
        this.physics.add(this.groundMesh, 'fixed', 'cuboid')
    }

    addMeshes() {
        const geometry = new THREE.SphereGeometry(.5, 32, 32)
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)

        const sunMaterial = new THREE.MeshStandardMaterial({ color: 'yellow', wireframe: false, map: this.sunMap, roughness: 1, transparent: true, opacity: .8 })
        const aboutMaterial = new THREE.MeshStandardMaterial({ color: 'blue', wireframe: false, roughness: .2, metalness: .5, transparent: true, opacity: .9 })

        this.sun = new THREE.Mesh(geometry, sunMaterial)
        this.sun.position.set(7.2, 4.7, -2)

        this.tesseractScene.scale.setScalar(.0035)
        this.tesseractScene.position.set(0, 4.6, -12.4)

        this.iphoneScene.position.set(-7.2, 4.6, -2)
        this.iphoneScene.scale.setScalar(.6)

        this.macbookScene.position.set(7.2, 4.5, -8)
        this.macbookScene.scale.setScalar(.4)

        this.carScene.scale.setScalar(.4)
        this.carScene.position.set(-7.2, 4.6, -8)

        this.macbookScene.traverse((obj) => {
            if (obj.isMesh) {

                obj.material.transparent = true;
                obj.material.opacity = .8

            }
        })

        this.iphoneScene.traverse((obj) => {
            if (obj.isMesh) {

                obj.material.transparent = true;
                obj.material.opacity = .8

            }
        })

        this.carScene.traverse((obj) => {
            if (obj.isMesh) {

                obj.material.transparent = true;
                obj.material.opacity = .8

            }
        })

        this.tesseractScene.traverse((obj) => {
            if (obj.isMesh) {

                obj.material.transparent = true;
                obj.material.opacity = .8

            }
        })


        this.scene.add(this.sun, this.iphoneScene, this.macbookScene, this.carScene, this.tesseractScene,)

    }

    addPillars() {
        this.pillarSun = new Pillar(this.sun, 'projectSolar')
        this.pillariphone = new Pillar(this.iphoneScene, 'toya')
        this.pillarMac = new Pillar(this.macbookScene, 'portfolio')
        this.pillarCar = new Pillar(this.carScene, 'sterling')
        this.pillarTesseract = new Pillar(this.tesseractScene, 'aboutMe')
    }

    loop(deltaTime) {
        this.pillarSun.loop()
        this.pillarCar.loop()
        this.pillarMac.loop()
        this.pillariphone.loop()
        this.pillarTesseract.loop()

        this.sun.rotation.y += deltaTime * .8
        this.tesseractScene.rotation.y += deltaTime * .8
        this.iphoneScene.rotation.y += deltaTime * .8
        this.macbookScene.rotation.y += deltaTime * .8
        this.carScene.rotation.y += deltaTime * .8

    }

}