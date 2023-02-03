export interface IApiService {
    getJokesRandomly(): PromiseLike<ChuckNorris.Joke>;
    getJokesCategories(): PromiseLike<string[]>;
    getJokeBySearch(search: string): PromiseLike<ChuckNorris.Joke[]>;
    getJokeByCategory(category: string): PromiseLike<ChuckNorris.Joke>;
}

interface SearchJokeResult {
    total: number;
    result: ChuckNorris.Joke[];
}

const config = { headers: { 'Content-Type': 'application/json' } };

export class ApiService implements IApiService {
    constructor(private readonly $http: angular.IHttpService) { }

    private baseUrl = 'https://api.chucknorris.io/jokes';

    public getJokesRandomly = async () => {
        const url = this.baseUrl + '/random';
        return (await this.$http.get<ChuckNorris.Joke>(url, config)).data;
    }

    public getJokesCategories = async () =>  {
        const url = this.baseUrl + '/categories';
        return (await this.$http.get<string[]>(url, config)).data;
    }

    public getJokeBySearch = async (search: string) =>  {
        const url = this.baseUrl + '/search?query=' + search;
        return (await this.$http.get<SearchJokeResult>(url, config)).data.result;
    }

    public getJokeByCategory = async (category: string) =>  {
        const url = this.baseUrl + '/random?category=' + category;
        return (await this.$http.get<ChuckNorris.Joke>(url, config)).data;
    }
}

ApiService.$inject = ['$http'];
