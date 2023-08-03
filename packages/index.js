import yButton from './button/index'
import yInput from './input/index'
import yTextarea from './textarea/index'
import ySpace from './space/index'

const install = (app) => {
    app.use(yInput).use(yButton).use(yTextarea).use(ySpace)
}

const YUI = {
    install
}

export { yButton, yInput, yTextarea, ySpace }
export default YUI