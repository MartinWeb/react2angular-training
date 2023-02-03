import { IApiService } from "services/api.service";
import { CategoriesResultComponent, CategoriesResultController } from "./CategoriesResult.component";

describe('CategoriesResultComponent', () => {
    test('should have valid snapshot', () => {
        expect(CategoriesResultComponent.template).toMatchSnapshot();
    });

    test('should have valid bindings', () => {
        expect(CategoriesResultComponent.bindings).toMatchSnapshot();
    });

    describe('CategoriesResultController', () => {
        let target: CategoriesResultController;
        let $scope: angular.IScope;
        let apiService: IApiService;
        const result = { value: 'joke' } as ChuckNorris.Joke;

        beforeEach(() => {
            $scope = ({
                $apply: jest.fn(),
            } as unknown) as angular.IScope;

            apiService = ({
                getJokeByCategory: jest.fn().mockResolvedValue(result)
            } as unknown) as IApiService;

            target = new CategoriesResultController(apiService, $scope);
        });

        it('should have correct injection', () => {
            expect(CategoriesResultController.$inject).toEqual(['apiService', '$scope']);
        });

        describe('onSelectCategory', () => {
            beforeEach(async () => {
                target.category = 'animal';
                await target.onSelectCategory();
            });

            it('should call apiService', async () => {
                expect(apiService.getJokeByCategory).toHaveBeenCalledWith('animal');
            });

            it('should return result', async () => {
                expect(target.joke).toEqual(result);
            });

            it('should call $apply', async () => {
                expect($scope.$apply).toHaveBeenCalled();
            });
        })
    });
});