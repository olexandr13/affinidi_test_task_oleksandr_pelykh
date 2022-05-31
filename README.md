### 1. Install modules
`npm i`

### 2. Run service
`npx json-server db.json -m ./node_modules/json-server-auth --routes src/routes.json`

### 3. Run tests
`npm run test:jest` or `npm run test:mocha`

or even better execute `npm test`
(it will run tests, generate allure report and open it in browser)
