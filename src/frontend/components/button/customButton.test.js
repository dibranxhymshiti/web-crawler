import { render, screen } from '@testing-library/react';
import CustomButton from './customButton';

test('Custom Button should render correctly', () => {
    render(<CustomButton disabled={true}>Search</CustomButton>);

    const btn = screen.getByTestId('button');

    expect(btn).toBeTruthy();
    expect(btn).toBeDisabled();
    expect(btn.textContent).toBe('Search');
})
