import angular from "angular";
import template from './random-result-template.html';

export const RandomResultComponent: angular.IComponentOptions = {
    template,
    bindings: {
        joke: '=',
        onReload: '<'
    }
};