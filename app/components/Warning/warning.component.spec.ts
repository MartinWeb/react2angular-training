import { WarningComponent } from "./Warning.component";

describe('WarningComponent', () => {
    test('should have valid snapshot', () => {
        expect(WarningComponent.template).toMatchSnapshot();
    });
});