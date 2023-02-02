import { AlertComponent, AlertController } from "./Alert.component";

describe('AlertComponent', () => {
    test('should have valid snapshot', () => {
        expect(AlertComponent.template).toMatchSnapshot();
    });

    it('should have correct bindings', () => {
        expect(AlertComponent.bindings).toMatchSnapshot();
    });
});

describe('AlertController', () => {
    let target: AlertController;

    beforeEach(() => {
        target = new AlertController();
    });

    it('$onInit', () => {
        target.$onInit();
        expect(target.isVisible).toEqual(true);
    });
});