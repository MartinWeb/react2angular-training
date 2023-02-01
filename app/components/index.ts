import angular from "angular";
import { HomeComponent } from "./Home/home.component";
import { HeaderComponent } from "./Layout/Header/Header.component";

const ComponentsModule = angular.module('training.components', [])
    .component('homeComponent', HomeComponent)
    .component('headerComponent', HeaderComponent);

const moduleName = ComponentsModule.name;

export { moduleName as ComponentsModule };