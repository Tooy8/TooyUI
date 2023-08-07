import yUpload from './index.vue';
yUpload.install = app => {
    app.component(yUpload.name, yUpload)
}
export default yUpload