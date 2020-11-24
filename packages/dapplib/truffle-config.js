require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rifle machine eternal gesture desert equal genuine'; 
let testAccounts = [
"0x291bcde1e848d65d6a4f32976445c80910b9f1de29bfca614297a7f45df5b10b",
"0xc06a4545707195c8c98b1074774d2a99ce595f38420eafebb367971eae4ea49b",
"0xcc2c76b0934883141b11a8849f197330b4f978a32a3d4e25f95d8392c75c7a84",
"0x453c769cf6141cdaefb6393b84f935f32236e8ed3ec6806441549d729f732129",
"0x4d1bc150c71dab82349c52fd9dab21142037c7678c5fff946eb0702f4a08f3f9",
"0x595e8e396ae9a872f1eceb26ba247e9642e14c435afc74da104b15fbc65984e5",
"0x20a2f5f0e32c71fdc9ef01eb2f8b634ed737b883b432dfdb9eb9f842f3d9dd8e",
"0x13bff720ae71f91209423ab5ae131b10fd6aa05864fbf4dff5f83dfd8d04c483",
"0x086fde1df68271a4d5ff16d7adde8d1df5a0643d8b5dd840f277c98cf363b5cd",
"0x16565e1ba3f2946586778ab7eab81627136ad2a682c9f9f6dc9bd4820688cdd2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
