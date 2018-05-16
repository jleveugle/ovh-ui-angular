import controller from "./dashboard-tile-item.controller.js";
import template from "./dashboard-tile-item.html";

export default {
    bindings: {
        title: "@"
    },
    controller,
    template,
    transclude: true
};