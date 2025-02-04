# Setup

This guide will take you through setting up the extension in a local environment.

Start a local Vite node. The easiest way is to use the Solidity++ Visual Studio Code Extension as described [here](https://docs.vite.org/go-vite/tutorial/sppguide/introduction/installation.html#installing-the-visual-studio-code-extension). This should start a local node at http://127.0.0.1:9000.

Ensure you are using node 14+:

    $ nvm install 14
    $ nvm use 14

Clone repo and cd into it. Then, install node_modules:

    $ npm install

Start webpack build server:

    $ make

On a new tab, launch a chrome session pre-installed with the extension. The chrome session opens up in the `src/example` dapp at http://localhost:7777/example.html.

    $ make pack
