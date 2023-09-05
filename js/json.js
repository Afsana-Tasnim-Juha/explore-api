const user = { id: 1, name: 'juha', job: 'actor' }

//JavaScript Object Notation(JSON)

const stringified = JSON.stringify(user);
//console.log(user);
//console.log(stringified);

const shop = {
    owner: 'Juha',
    address: {
        street: 'VESTTERSSTRASS',
        city: 'RaNVIR',
        country: 'Bangladesh',
    },
    products: ['PC', 'mic', 'monitor'],
    revenue: 30000,
    isOpen: true,
    isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
