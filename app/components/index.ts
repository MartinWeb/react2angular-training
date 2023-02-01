import angular from "angular";
import { AlertComponent } from "./Alert/Alert.component";
import { HomeComponent } from "./Home/home.component";

const ComponentsModule = angular.module('training.components', [])
    .component('homeComponent', HomeComponent)
    .component('alertComponent', AlertComponent);

const moduleName = ComponentsModule.name;

export { moduleName as ComponentsModule };