import yInput from './index.vue';
yInput.install = app => {
    app.component(yInput.name, yInput)
}
export default yInput