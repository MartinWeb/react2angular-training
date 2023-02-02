import angular from "angular";
import { AlertComponent } from "./Alert/Alert.component";
import { HomeComponent } from "./Home/home.component";
import { WarningComponent } from "./Warning/Warning.component";

const ComponentsModule = angular.module('training.components', [])
    .component('homeComponent', HomeComponent)
    .component('alertComponent', AlertComponent)
    .component('warningComponent', WarningComponent);

const moduleName = ComponentsModule.name;

export { moduleName as ComponentsModule };