import { render, screen } from '@testing-library/react';
import { Warning } from './Warning';

describe('Warning Component', () => {
    it('should render', () => {
        render(<Warning />);
        expect(screen.queryByRole('heading', { name: /Be very careful not to mock this website's design !/i })).toBeInTheDocument();
        expect(screen.queryByText(/Chuck loves orange and blue, because it's the colour of his beard and his favorite jeans./i)).toBeInTheDocument();
    });
});
