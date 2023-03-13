import { proxy } from 'valtio'

const globalState = proxy({
    addedClasses: []
})

export { globalState }