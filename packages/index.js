import yButton from './button/index'

const install = (app) => {
    app.use(yButton)
}

const YUI = {
    install
}

export { yButton }
export default YUI