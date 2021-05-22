# blockchain_explorer_whales.js [![Build Status](https://scrutinizer-ci.com/g/fedemagnani/blockchain_explorer_whales.js/badges/build.png?b=main)](https://scrutinizer-ci.com/g/fedemagnani/blockchain_explorer_whales.js/build-status/main) [![stars - Binance_Watcher.js](https://img.shields.io/github/stars/fedemagnani/blockchain_explorer_whales.js?style=social)](https://github.com/fedemagnani/blockchain_explorer_whales.js/stargazers) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/nonsonouncoder.svg?style=social)](https://twitter.com/nonsonouncoder)

<!-- [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/fedemagnani/Binance_Watcher.js/badges/quality-score.png?b=main)](https://scrutinizer-ci.com/g/fedemagnani/Binance_Watcher.js/?branch=main) [![License](https://img.shields.io/badge/License-GPL--3.0-blue)](#license) -->

A script for collecting big movements on bitcoin blockchain

## Getting started
This program requires NodeJS to be installed: https://nodejs.org/it/download/ 

STEPS:

0) Open your terminal (Start > cmd)

1) `git clone https://github.com/fedemagnani/blockchain_explorer_whales.js.git`

2) `cd blockchain_explorer_whales.js`

3) `npm install` (in order to install all the dependencies)

4) `node main`

This will open a websocket connection with blockchain.com and will show you all the transactions that exceed a certain amount of cryptocurrency amount. You can set the value you want by changing the `atLeast` variable in `main.js` (100 by default).
Logs are saved in txt format while the big addresses are indexed in a .json file