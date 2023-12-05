import * as THREE from 'three'
import App from '../App.js'
import { inputStore } from '../Utils/Store.js';
import assetStore from '../Utils/AssetStore.js';

export default class Character {
    constructor() {
        this.app = new App()
        this.world = this.app.world
        this.assetStore = assetStore.getState()
        this.avatar = this.assetStore.loadedAssets.avatar


        this.scene = this.app.scene;
        this.physics = this.world.physics

        inputStore.subscribe((state) => {
            this.forward = state.forward
            this.backward = state.backward
            this.left = state.left
            this.right = state.right
        })

        this.avatarScene = this.avatar.scene
        this.avatarScene.scale.setScalar(3)
        this.avatarScene.rotation.y = Math.PI
        this.avatarScene.position.y = -3
        this.avatar.castShadow = true
        this.avatarScene.castShadow = true
        this.scene.add(this.avatarScene)

        this.instantiateCharacter()
    }

    instantiateCharacter() {

        const geometry = new THREE.BoxGeometry(2, 6, 2)
        const material = new THREE.MeshStandardMaterial(
            {
                wireframe: true,
                color: 0x00ff00,
                visible: false,
            })

        // create mesh
        this.character = new THREE.Mesh(geometry, material)
        this.character.position.set(0, 4, 0)

        this.scene.add(this.character)
        this.character.add(this.avatarScene)

        // create rigid body
        const rigidBodyType = this.physics.rapier.RigidBodyDesc.kinematicPositionBased()
        this.rigidBody = this.physics.world.createRigidBody(rigidBodyType)



        //create collider
        const colliderType = this.physics.rapier.ColliderDesc.cuboid(1, 3, 1)
        this.collider = this.physics.world.createCollider(colliderType, this.rigidBody)

        const worldPosition = this.character.getWorldPosition(new THREE.Vector3())
        const worldRotation = this.character.getWorldQuaternion(new THREE.Quaternion())

        this.rigidBody.setTranslation(worldPosition)
        this.rigidBody.setRotation(worldRotation)

        this.characterController = this.physics.world.createCharacterController(0.01)
        this.characterController.setApplyImpulsesToDynamicBodies(true)
        this.characterController.enableAutostep(3, .1)
        this.characterController.snapToGroundDistance(1)


    }

    loop(deltaTime) {
        const movement = new THREE.Vector3()
        if (this.forward) {
            if (this.character.position.z > -16) {
                movement.z -= 1
            }

        }
        if (this.backward) {
            if (this.character.position.z < 13.4) {
                movement.z += 1
            }
        }
        if (this.left) {
            if (this.character.position.x >= -16.5) {
                movement.x -= 1

            }

        }
        if (this.right) {
            if (this.character.position.x <= 16.5)
                movement.x += 1
        }

        if (movement.length() !== 0) {
            const angle = Math.atan2(movement.x, movement.z) + Math.PI
            const characterRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle)
            this.character.quaternion.slerp(characterRotation, deltaTime * 10)
        }



        movement.normalize().multiplyScalar(deltaTime * 12)



        movement.y = -1

        this.characterController.computeColliderMovement(this.collider, movement)


        const newPosition = new THREE.Vector3().copy(this.rigidBody.translation()).add(this.characterController.computedMovement())

        this.rigidBody.setNextKinematicTranslation(newPosition)
        this.character.position.lerp(this.rigidBody.translation(), deltaTime * 10)
    }
}