import React from 'react';
import { render } from '@testing-library/react';
import Container from '../components/Container';
describe('<Container />', () => {
    // CONTAINER COMPONENT FOR TEST
    function ContainerComponent(props: any) {
        return <Container>{props.children}</Container>;
    }

    const setup = (widthChildren: string) => {
        const utils = render(<ContainerComponent>{widthChildren}</ContainerComponent>);
        const component = utils.getByTestId('container-test');
        return {
            component,
            ...utils,
        };
    };

    it('should be able to render a Container page', () => {
        const { component } = setup('');
        expect(component).toBeTruthy();
    });
});
