import { ReloadButtonComponent } from "./ReloadButton.component";

describe('ReloadButtonComponent', () => {
    test('should have valid snapshot', () => {
        expect(ReloadButtonComponent.template).toMatchSnapshot();
    });

    test('should have valid bindings', () => {
        expect(ReloadButtonComponent.bindings).toMatchSnapshot();
    });
});