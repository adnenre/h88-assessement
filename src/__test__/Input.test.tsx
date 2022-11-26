import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe('<Input />', () => {
    //  COUNTRY COMPONENT FOR TEST
    function CountryInput(props: any) {
        // COMPONENT STATE
        const [value, setValue] = useState('');

        // EVENT HANDLER
        const handleChange = (data: string) => {
            setValue(data);
        };

        return <Input value={value} onChange={handleChange} {...props} />;
    }

    const setup = () => {
        const utils = render(<CountryInput />);
        const input = utils.getByLabelText('search-input');
        return {
            input,
            ...utils,
        };
    };

    test('should be able to render an Input component', () => {
        const { input } = setup();
        expect(input).toBeTruthy;
    });

    test('Input should update the value to AI', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 'AI' } });
        expect(input.getAttribute('value')).toBe('AI');
    });

    test('Input should be empty', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: '' } });
        expect(input.getAttribute('value')).toBe('');
    });
});
