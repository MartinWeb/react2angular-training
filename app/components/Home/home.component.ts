import angular from "angular";
import template from './home-template.html';
import './home.scss';

export class HomeController implements angular.IController {
    constructor() {
        console.log('test');
    }
}

export const HomeComponent: angular.IComponentOptions = {
    template,
    controller: HomeController,
};