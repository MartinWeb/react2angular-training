import { HeaderComponent } from "./Header.component";

describe('headercomponent', () => {
    test('should have valid snapshot', () => {
        expect(HeaderComponent.template).toMatchSnapshot();
    });
});