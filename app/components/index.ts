import angular from "angular";
import { ServiceModule } from "services";
import { AlertComponent } from "./Alert/Alert.component";
import { ChoiceComponent } from "./Choice/Choice.component";
import { HomeComponent } from "./Home/home.component";
import { ReloadButtonComponent } from "./ReloadButton/ReloadButton.component";
import { CategoriesResultComponent } from "./Results/CategoriesResult/CategoriesResult.component";
import { JokeComponent } from "./Results/Joke";
import { RandomResultComponent } from "./Results/RandomResult/RandomResult.component";
import { SearchResultComponent } from "./Results/SearchResult";
import { WarningComponent } from "./Warning";

const ComponentsModule = angular.module('training.components', [ServiceModule])
    .component('homeComponent', HomeComponent)
    .component('alertComponent', AlertComponent)
    .component('warningComponent', WarningComponent)
    .component('choiceComponent', ChoiceComponent)
    .component('jokeComponent', JokeComponent)
    .component('categoriesResultComponent', CategoriesResultComponent)
    .component('randomResultComponent', RandomResultComponent)
    .component('searchResultComponent', SearchResultComponent)
    .component('reloadButtonComponent', ReloadButtonComponent);

const moduleName = ComponentsModule.name;

export { moduleName as ComponentsModule };