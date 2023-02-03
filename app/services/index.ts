import angular from "angular";
import { ApiService } from "./api.service";

const ServiceModule = angular.module('training.services', [])
    .service('apiService', ApiService);

const moduleName = ServiceModule.name;

export { moduleName as ServiceModule };