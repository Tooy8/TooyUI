import yButton from './button/index'
import yInput from './input/index'
import yTextarea from './textarea/index'
import ySpace from './space/index'
import ySelect from './select/index'
import yRadio from './radio/index'
import yUpload from './upload/index'

const install = (app) => {
    app.use(yInput).use(yButton).use(yTextarea).use(ySpace).use(ySelect).use(yRadio).use(yUpload)
}

const YUI = {
    install
}

export { yButton, yInput, yTextarea, ySpace, ySelect, yRadio, yUpload }
export default YUI