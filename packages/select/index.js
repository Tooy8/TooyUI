import ySelect from './index.vue';
ySelect.install = app => {
    app.component(ySelect.name, ySelect)
}
export default ySelect