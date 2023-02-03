import { JokeComponent } from "./Joke.component";

describe('JokeComponent', () => {
    test('should have valid snapshot', () => {
        expect(JokeComponent.template).toMatchSnapshot();
    });

    test('should have valid bindings', () => {
        expect(JokeComponent.bindings).toMatchSnapshot();
    });
});