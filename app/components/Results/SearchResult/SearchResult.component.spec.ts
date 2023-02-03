import { SearchResultComponent } from "./SearchResult.component";

describe('SearchResultComponent', () => {
    test('should have valid snapshot', () => {
        expect(SearchResultComponent.template).toMatchSnapshot();
    });

    test('should have valid bindings', () => {
        expect(SearchResultComponent.bindings).toMatchSnapshot();
    });
});