export default class {
    constructor ($q) {
        "ngInject";
        this.$q = $q;
    }

    addItem (item) {
        return this.onAdd ?
            this.onAdd({ item }) :
            this.$q.resolve();
    }

    removeItem (item) {
        return this.onRemove ?
            this.onRemove({ item }) :
            this.$q.resolve();
    }
}
