import angular from "angular";
import template from './footer-template.html';
import './footer.scss';

export class FooterController implements angular.IController {
    public date: Date;

    public $onInit() {
        this.date = new Date(1993, 3, 21);
    }
}

export const FooterComponent: angular.IComponentOptions = {
    template,
    controller: FooterController
};