import ySpace from './index.vue';
ySpace.install = app => {
    app.component(ySpace.name, ySpace)
}
export default ySpace