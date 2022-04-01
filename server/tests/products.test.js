import { getAll } from '../products.mjs'

import produits from '../products.json'

describe('tests de produits', () => {
    test('listes des produits en stock', () => {
        //changer le chemin dans loadProducts (products.mjs) pour tester -> "../products.json";
        expect(getAll()).toMatchObject(produits);
    });
});