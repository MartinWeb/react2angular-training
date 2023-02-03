import { render, screen } from '@testing-library/react';
import { SearchResult } from './SearchResult';

describe('SearchResult Component', () => {
    it('should render', () => {
        render(<SearchResult jokes={[{value: 'Une bonne blague'} as ChuckNorris.Joke, {value: 'Et la petite soeur !'} as ChuckNorris.Joke]} />);

        expect(screen.queryByText(/Une bonne blague/i)).toBeInTheDocument();
        expect(screen.queryByText(/Et la petite soeur !/i)).toBeInTheDocument();
    });
});
