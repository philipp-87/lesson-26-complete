import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes,
    payload: collectionsMap,
});
