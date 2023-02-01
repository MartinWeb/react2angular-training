import angular from "angular";
import template from './alert-template.html';
import './alert.scss';

export class AlertController implements angular.IController {
    public isVisible: boolean;

    public $onInit() {
        this.isVisible = true;
    }
}

export const AlertComponent: angular.IComponentOptions = {
    template,
    controller: AlertController,
    bindings: {
        title: '@',
        type: '@'
    },
    transclude: true,
};