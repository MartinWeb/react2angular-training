import { IApiService } from "services/api.service";
import { ChoiceComponent, ChoiceController } from "./Choice.component";

describe('ChoiceComponent', () => {
    test('should have valid snapshot', () => {
        expect(ChoiceComponent.template).toMatchSnapshot();
    });

    describe('ChoiceController', () => {
        let target: ChoiceController;
        let $scope: angular.IScope;
        let apiService: IApiService;
        const resultJoke = { value: 'joke' } as ChuckNorris.Joke;
        const resultCategories = ['animal', 'food'];
        const resultJokes = [{ value: 'joke' } as ChuckNorris.Joke, { value: 'joke 2' } as ChuckNorris.Joke];

        beforeEach(() => {
            $scope = ({
                $apply: jest.fn(),
            } as unknown) as angular.IScope;

            apiService = ({
                getJokesRandomly: jest.fn().mockResolvedValue(resultJoke),
                getJokesCategories: jest.fn().mockResolvedValue(resultCategories),
                getJokeBySearch: jest.fn().mockResolvedValue(resultJokes)
            } as unknown) as IApiService;

            target = new ChoiceController(apiService, $scope);
        });

        it('should have correct injection', () => {
            expect(ChoiceController.$inject).toEqual(['apiService', '$scope']);
        });

        describe('onSearch', () => {
            beforeEach(async () => {
                target.search = 'christmas';
                await target.onSearch();
            });

            it('should call apiService', async () => {
                expect(apiService.getJokeBySearch).toHaveBeenCalledWith('christmas');
            });

            it('should return result', async () => {
                expect(target.jokes).toEqual(resultJokes);
            });

            it('should call $apply', async () => {
                expect($scope.$apply).toHaveBeenCalled();
            });
        });

        describe('onSelectChoice', () => {
            describe('choice random', () => {
                beforeEach(async () => {
                    target.choice = 'random';
                    await target.onSelectChoice();
                });
                
                it('should call apiService', async () => {
                    await expect(apiService.getJokesRandomly).toHaveBeenCalled();
                });
    
                it('should return result', async () => {
                    await expect(target.joke).toEqual(resultJoke);
                });
    
                it('should call $apply', async () => {
                    await expect($scope.$apply).toHaveBeenCalled();
                });
            });

            describe('choice categories', () => {
                beforeEach(async () => {
                    target.choice = 'categories';
                    await target.onSelectChoice();
                });

                it('should call apiService', async () => {
                    await expect(apiService.getJokesCategories).toHaveBeenCalled();
                });
    
                it('should return result', async () => {
                    await expect(target.categories).toEqual(resultCategories);
                });
    
                it('should call $apply', async () => {
                    await expect($scope.$apply).toHaveBeenCalled();
                });
            });
        });
    });
});