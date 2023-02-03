import { HomeComponent } from "./home.component";

describe('HomeComponent', () => {
    test('should have valid snapshot', () => {
        expect(HomeComponent.template).toMatchSnapshot();
    });
});