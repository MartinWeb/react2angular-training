import angular from "angular";
import template from './reload-template.html';
import './reload-button.scss';

export const ReloadButtonComponent: angular.IComponentOptions = {
    template,
    bindings: {
        onReload: '<',
        content: '@',
        visibility: '<'
    }
};