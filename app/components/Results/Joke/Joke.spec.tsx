import { render, screen } from '@testing-library/react';
import { Joke } from './Joke';

describe('Joke Component', () => {
    it('should render', () => {
        render(<Joke joke={{value: 'Une bonne blague'} as ChuckNorris.Joke} />);

        expect(screen.queryByRole('heading', { name: /Une bonne blague/i })).toBeInTheDocument();
    });
});
