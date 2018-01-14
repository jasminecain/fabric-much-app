# FabricMuch

This project is built with AngularJS using components and [UI Router](https://github.com/angular-ui/ui-router).

### Description:
Fabric Much is an app built for crafters to track their fabric inventory to help avoid purchasing duplicates. User can input the fabric bolt's information: barcode, fabric name, price, quantity, type and store. This will help prevent multiple purchases and let users know their current inventory and how much they have. Essentially it could be used for any craft hobby or supplies.

### Prerequisites
- Node v6.11.0
- NPM >= v5.3.0

### Spin up
```bash
npm install
http -server
grunt
```
### Staging

You'll need a server to run Bobbin in your browser, if you don't have one installed, [http-server](https://www.npmjs.com/package/http-server) is a quick option.

```bash
npm install --save http-server
```
Then open a new terminal tab and run:

```bash
hs -o

This app also needs the [FabricMuch API](https://github.com/jasmineq/fabric-much-api) in order for it to run.
