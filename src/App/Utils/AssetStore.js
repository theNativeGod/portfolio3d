import { createStore } from 'zustand/vanilla'



const assetsToLoad = [
    {
        id: 'avatar',
        path: './models/avatar.glb',
        type: 'model'
    },
    {
        id: 'iron_man',
        path: './models/iron_man.glb',
        type: 'model'
    },
    {
        id: 'iphone',
        path: './models/iphone_14_pro.glb',
        type: 'model'
    },
    {
        id: 'macbook',
        path: './models/macbook.glb',
        type: 'model'
    },
    {
        id: 'car',
        path: './models/audir8.glb',
        type: 'model'
    },
    {
        id: 'tesseract',
        path: './models/tesseract.glb',
        type: 'model'
    },
    {
        id: 'environment',
        path: './models/environment.glb',
        type: 'model'
    },
    {
        path: './textures/city.jpg',
        id: 'city',
        type: 'texture',
    },
    // {
    //     path: '/textures/2k_mars.jpg',
    //     id: 'mars',
    //     type: 'texture',
    // },
    // {
    //     path: '/textures/2k_mercury.jpg',
    //     id: 'mercury',
    //     type: 'texture',
    // },
    {
        path: './textures/2k_sun.jpg',
        id: 'sun',
        type: 'texture',
    },
]

const assetStore = createStore((set) => ({
    assetsToLoad,
    loadAssets: {},
    addLoadedAsset: (asset, id) => set((state) => ({
        loadedAssets: {
            ...state.loadedAssets,
            [id]: asset
        }
    })
    )
}))

export default assetStore