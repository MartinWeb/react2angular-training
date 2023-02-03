import { react2angular } from 'react2angular';
import { SearchResult, SearchResultProps } from './SearchResult';

const SearchResultComponent = react2angular((props: SearchResultProps) => <SearchResult {...props} />, ['jokes']);

export { SearchResultComponent, SearchResult };
