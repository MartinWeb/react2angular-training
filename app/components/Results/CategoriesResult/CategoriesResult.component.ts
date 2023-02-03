import angular, { IScope } from "angular";
import { IApiService } from "services/api.service";
import template from './categories-result-template.html';
import './categories-result.scss';

export class CategoriesResultController implements angular.IController {
    public category: string = null;
    public joke: ChuckNorris.Joke = null;

    constructor(private readonly apiService: IApiService, private readonly $scope: IScope) {}

    public onSelectCategory = async () => {
        this.joke = await this.apiService.getJokeByCategory(this.category);
        
        this.$scope.$apply();
    }
}

CategoriesResultController.$inject = ['apiService', '$scope'];

export const CategoriesResultComponent: angular.IComponentOptions = {
    template,
    controller: CategoriesResultController,
    bindings: {
        categories: '='
    }
};