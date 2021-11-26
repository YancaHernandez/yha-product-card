import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';

import { product2 } from "../data/products";
describe('ProductImage', () => {
    it('debe de mostrar el componente con la imagen  personalizada', () => {
        const wrapper = renderer.create(<ProductImage  img="https://cdn.pixabay.com/photo/2012/04/05/01/24/dice-25637_960_720.png" />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    () => <ProductImage />
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});