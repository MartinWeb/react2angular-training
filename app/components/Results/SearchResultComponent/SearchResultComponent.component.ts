import angular from "angular";
import template from './search-result-template.html';
import './search-result.scss';

export const SearchResultComponent: angular.IComponentOptions = {
    template,
    bindings: {
        jokes: '<'
    }
};