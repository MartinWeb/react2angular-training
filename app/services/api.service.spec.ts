import angular from 'angular';
import { ApiService, IApiService } from './api.service';

describe('api service', () => {
    let target: IApiService;
    let $http: angular.IHttpService;

    $http = {
        get: jest.fn(),
    } as unknown as angular.IHttpService;

    target = new ApiService($http);

    describe('function getJokesRandomly', () => {
        const Act = async () => {
            $http.get = jest.fn().mockResolvedValue({data: {value: 'joke'} as ChuckNorris.Joke});
            return target.getJokesRandomly();
        };

        it('should call $http with get', () => {
            Act();
            expect($http.get).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/random', {
                headers: { 'Content-Type': 'application/json' },
            });
        });

        it('should expected return', async () => {
            const result = await Act();
            expect(result).toEqual({value: 'joke'} as ChuckNorris.Joke);
        });
    });

    describe('function getJokesCategories', () => {
        const Act = async () => {
            $http.get = jest.fn().mockResolvedValue({data: ['test','animal']});
            return target.getJokesCategories();
        };

        it('should call $http with get', () => {
            Act();
            expect($http.get).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/categories', {
                headers: { 'Content-Type': 'application/json' },
            });
        });

        it('should expected return', async () => {
            const result = await Act();
            expect(result).toEqual(['test','animal']);
        });
    });

    describe('function getJokeBySearch', () => {
        const Act = async () => {
            $http.get = jest.fn().mockResolvedValue({data: { result : [{value: 'joke'} as ChuckNorris.Joke, {value: 'joke 2'} as ChuckNorris.Joke]}});
            return target.getJokeBySearch('test');
        };

        it('should call $http with get', () => {
            Act();
            expect($http.get).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/search?query=test', {
                headers: { 'Content-Type': 'application/json' },
            });
        });

        it('should expected return', async () => {
            const result = await Act();
            expect(result).toEqual([{value: 'joke'} as ChuckNorris.Joke, {value: 'joke 2'} as ChuckNorris.Joke]);
        });
    });

    describe('function getJokeByCategory', () => {
        const Act = async () => {
            $http.get = jest.fn().mockResolvedValue({data: {value: 'joke'} as ChuckNorris.Joke});
            return target.getJokeByCategory('animal');
        };

        it('should call $http with get', () => {
            Act();
            expect($http.get).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/random?category=animal', {
                headers: { 'Content-Type': 'application/json' },
            });
        });

        it('should expected return', async () => {
            const result = await Act();
            expect(result).toEqual({value: 'joke'} as ChuckNorris.Joke);
        });
    });
});
