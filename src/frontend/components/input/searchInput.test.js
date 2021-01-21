import {render, fireEvent} from "@testing-library/react";
import SearchInput from "./searchInput";

test('SearchInput should render', () => {
    const{queryByTestId} = render(<SearchInput/>);
    const input = queryByTestId('searchInput');

    expect(input).toBeTruthy();
})

describe('changeInput value', () => {
    test('onChange', () => {
        const{queryByTestId} = render(<SearchInput/>);
        const input = queryByTestId('searchInput');

        fireEvent.change(input, {target: {value: 'testValue'}});

        expect(input.value).toBe('testValue')
    })
})
