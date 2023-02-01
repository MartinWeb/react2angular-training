import angular from "angular";
import { FooterComponent } from "./Footer/Footer.component";
import { HeaderComponent } from "./Header/Header.component";

const LayoutModule = angular.module('training.layout', [])
    .component('headerComponent', HeaderComponent)
    .component('footerComponent', FooterComponent);

const moduleName = LayoutModule.name;

export { moduleName as LayoutModule };