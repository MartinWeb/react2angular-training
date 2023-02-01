import angular from "angular";
import { HomeComponent } from "./Home/home.component";

const ComponentsModule = angular.module('training.components', [])
    .component('homeComponent', HomeComponent);

const moduleName = ComponentsModule.name;

export { moduleName as ComponentsModule };