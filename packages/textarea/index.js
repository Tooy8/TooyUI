import yTextarea from './index.vue';
yTextarea.install = app => {
    app.component(yTextarea.name, yTextarea)
}
export default yTextarea