import { render, screen } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('Search something to start scraping');
    expect(linkElement).toBeInTheDocument();
});
