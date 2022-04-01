import { getAll } from '../server/products.mjs'

import produits from '../server/products.json'

describe('tests de produits', () => {
    test('listes des produits en stock', () => {
        //changer le chemin dans loadProducts (products.mjs) pour tester -> "../server/products.json";
        expect(getAll()).toMatchObject(produits);
    });
});