import React from 'react';

import { Menu, ProductContainer } from './StyledProductMenu';

export const ProductMenu = () => {
    const menuArray = ['casino', 'welcome bonus', 'user rating', 'rating', 'play now']
    const menuItem = menuArray.map((item, index) => <p key={index}>{item}</p>)
    return (
        <ProductContainer>
            <Menu>
                {menuItem}
            </Menu>
        </ProductContainer>
    )
};