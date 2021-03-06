import Popover from "./popover.component.js";
import PopoverContent from "./popover-content.directive";
import PopoverTrigger from "./popover-trigger.directive";

angular.module("oui.popover", [])
    .component("ouiPopover", Popover)
    .directive("ouiPopoverContent", PopoverContent)
    .directive("ouiPopoverTrigger", PopoverTrigger);
