import axios from 'axios';

const getProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/products')
            .then((res) => {
                console.log('--------- \n getProducts \n', res.data);
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            })
    });
}

const addProduct = (product) => {
    axios.post('http://localhost:3000/products', product)
        .then((res) => {
            console.log('--------- \n addProduct \n', res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const getProductsAsync = async () => {
    try {
        return axios.get('http://localhost:3000/products')
    } catch (err) {
        console.log('getProductAsync :', err)
    }
}

(async () => {
    const pdt = {
        name: 'pasteque',
        quantity: 10
    }
    getProducts();
    addProduct(pdt);
    const pdts = await getProductsAsync();
    console.log('--------- \n getProductsAsync \n', pdts.data);

})();
