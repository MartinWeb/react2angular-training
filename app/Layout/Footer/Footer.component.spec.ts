import { FooterComponent } from "./Footer.component";

describe('footerComponent', () => {
    test('should have valid snapshot', () => {
        expect(FooterComponent.template).toMatchSnapshot();
    });
});