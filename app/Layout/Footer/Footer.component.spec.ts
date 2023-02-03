import { FooterComponent, FooterController } from "./Footer.component";

describe('footerComponent', () => {
    test('should have valid snapshot', () => {
        expect(FooterComponent.template).toMatchSnapshot();
    });

    describe('FooterController', () => {
        let target: FooterController;

        beforeEach(() => {
            const mockedDate = new Date(1993, 3, 21);
            jest.useFakeTimers();
            jest.setSystemTime(mockedDate);

            target = new FooterController();
        });

        it('should have correct date', () => {
            target.$onInit();
            expect(target.date.getFullYear()).toEqual(1993);
        });
    });
});