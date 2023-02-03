import angular, { IScope } from "angular";
import { ApiService } from "services/api.service";
import template from './choice-template.html';
import './choice.scss';

export class ChoiceController implements angular.IController {
    public choice: string;
    public search: string;
    public joke: ChuckNorris.Joke = null;
    public jokes: ChuckNorris.Joke[] = null;
    public categories: string[] = null;

    constructor(private readonly apiService: ApiService, private readonly $scope: IScope) {}

    public onSelectChoice = async () => {
        if(this.choice === 'random') {
            this.joke = await this.apiService.getJokesRandomly();
            this.$scope.$apply();
        } 
        
        if(this.choice === 'categories') {
            this.categories = await this.apiService.getJokesCategories();
            this.$scope.$apply();
        }
    }

    public onSearch = async () => {
        this.jokes = await this.apiService.getJokeBySearch(this.search);

        this.$scope.$apply();
    }
}

ChoiceController.$inject = ['apiService', '$scope'];

export const ChoiceComponent: angular.IComponentOptions = {
    template,
    controller: ChoiceController
};