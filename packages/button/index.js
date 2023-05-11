import yButton from './index.vue';
yButton.install = app => {
    app.component(yButton.name, yButton)
}
export default yButton