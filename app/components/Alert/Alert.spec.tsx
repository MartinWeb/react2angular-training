import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert, AlertProps } from './Alert';

describe('Alert Component', () => {
    it('should render without children', () => {
        const props = {
            title: 'Alerte',
            type: 'info'
        } as AlertProps;

        render(<Alert {...props} />);
        expect(screen.queryByRole('heading', { name: /Alerte/i })).toBeInTheDocument();
    });

    it('should render with children', () => {
        const children = <p>Plus d'informations sur cette alerte</p>;

        const props = {
            title: 'Alerte',
            type: 'warning',
            children
        } as AlertProps;

        render(<Alert {...props} />);
        expect(screen.queryByRole('heading', { name: /Alerte/i })).toBeInTheDocument();
        expect(screen.queryByText(/Plus d'informations sur cette alerte/i)).toBeInTheDocument();
    });

    it('should not render after click on close button', async () => {
        const props = {
            title: 'Alerte',
            type: 'warning',
        } as AlertProps;

        render(<Alert {...props} />);
        
        expect(screen.queryByRole('heading', { name: /Alerte/i })).toBeInTheDocument();

        const button = screen.queryByText(/X/i);

        await userEvent.click(button);

        await waitFor(() => expect(screen.queryByRole('heading', { name: /Alerte/i })).not.toBeInTheDocument());
    });
});
