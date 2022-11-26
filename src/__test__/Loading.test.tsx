import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../components/Loading/Loading';
describe('<Loading />', () => {
    // LOADING COMPONENT FOR TEST
    function LoadingComponent(props: any) {
        return <Loading>{props.children}</Loading>;
    }

    const setup = (widthChildren: string) => {
        const utils = render(<LoadingComponent>{widthChildren}</LoadingComponent>);
        const loading = utils.getByTestId('loading-test');
        return {
            loading,
            ...utils,
        };
    };

    it('should be able to render a Loading page', () => {
        const { loading } = setup('');
        expect(loading).toBeTruthy();
    });

    test('should be rendered with empty value', () => {
        const { loading } = setup('');

        expect(loading.innerHTML).toBe('');
    });
    test('should be an object', () => {
        const { loading } = setup('');
        expect(typeof loading).toBe('object');
    });

    test('should a text loading... in the middel', () => {
        const { loading } = setup('loading...');

        expect(loading.innerHTML).toBe('loading...');
    });
});
