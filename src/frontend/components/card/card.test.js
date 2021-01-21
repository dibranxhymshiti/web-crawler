import { render, screen } from '@testing-library/react';
import Card from './card';

test('Card should render correctly', () => {
    const data = {libraryName: 'ReactJs', count: 5}
    render(<Card data={data} position={0}/>)

    expect(screen.getByTestId('cardTitle').textContent).toBe(data.libraryName);
    expect(screen.getByTestId('cardInfo').textContent).toContain(data.count);
    expect(screen.getByTestId('rank').textContent).toBe('1st');
})
