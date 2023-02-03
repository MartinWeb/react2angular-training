import { RandomResultComponent } from "./RandomResult.component";

describe('RandomResultComponent', () => {
    test('should have valid snapshot', () => {
        expect(RandomResultComponent.template).toMatchSnapshot();
    });

    test('should have valid bindings', () => {
        expect(RandomResultComponent.bindings).toMatchSnapshot();
    });
});