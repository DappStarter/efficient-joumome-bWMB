require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn pull hunt problem forward swarm'; 
let testAccounts = [
"0x89b765b9a51e446e447cebe73f6789f9f6f048056b32058cd97dd9c613ade234",
"0xf65864c8c5bd7263aa690782e051a12e1b9e7323db08ed9d0219b542bc89a534",
"0x8d9cf1a4f9470c4f20eb4cb5b758007deb15246901df3bad1cf8c21856a49b85",
"0x1c3794e88d57c9b2a2381f55e15aa115b85799ee066adbe20bdb637380549fdb",
"0x6f23d9f14ca3e3fb18299032e3332ff0db206e26de8188783a721a759356bb23",
"0xb3163e7232a530e7d96f2c97aede0de2d4a3ed2efe17b9c9729a6dac58f54343",
"0x2c43adcce06f22b2de0c0e0eae6981c3938262eab4e79f47305752686e16a887",
"0x53f5889f9c4890a5967de5be6b4ed9cf2887bb3116902e7c6ecaed1b6ca3362b",
"0x5759849317682314a3abf785b9dc60ff995a08d423e148d10e23f625bd4ad455",
"0x820ffe67d62cb542e75a378e536ae6e13773df8c8e0ddd546c26d29b7bed8c76"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

