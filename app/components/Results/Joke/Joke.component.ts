import angular from "angular";
import template from './joke-template.html';
import './joke.scss';

export const JokeComponent: angular.IComponentOptions = {
    template,
    bindings: {
        joke: '='
    }
};