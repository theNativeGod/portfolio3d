import ModalContentProvider from "../UI/ModalContentProvider"
import App from "../App"
import ModalManager from "../UI/ModalManager"

export default class Pillar {
    constructor(mesh, name) {
        this.app = new App()
        this.modalContent = new ModalContentProvider()
        this.content = this.modalContent.getModalInfo(name)
        this.mesh = mesh
        this.modalManager = new ModalManager()

        this.isPreviousNear = false

    }

    loop() {
        this.character = this.app.world.character.character
        if (this.character) {
            const distance = this.mesh.position.distanceTo(this.character.position)
            const isNear = distance < 3
            if (isNear) {
                if (!this.isPreviousNear) {
                    this.modalManager.openModal(this.content.title, this.content.description)
                }

                this.isPreviousNear = true
            } else {
                if (this.isPreviousNear) {
                    this.modalManager.closeModal()
                }

                this.isPreviousNear = false
            }
        }

    }
}