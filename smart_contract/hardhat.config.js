//https://eth-sepolia.g.alchemy.com/v2/B1VOEB27Lo8iCVNH4eCHZf5eXgN4Bo6V

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/B1VOEB27Lo8iCVNH4eCHZf5eXgN4Bo6V',
      accounts: ['d82395bbdd0ead27f4f99e7c26a7cab61b36eb89309e4b7bbe26152ea913e425'],
    },
  },
};