import { ComponentInternalInstance, getCurrentInstance } from "vue";

export default class FileUploadHelper {
    constructor() {
        const instance = getCurrentInstance() as ComponentInternalInstance;//return null when packaged
        debugger
        const {
            appContext: {
                config: { globalProperties },
            },
        } = instance;
        console.log('instance', instance)
        console.log('globalProperties', globalProperties)

    }

}