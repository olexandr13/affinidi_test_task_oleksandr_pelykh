### 1. Install modules
`npm i`

### 2. Run service
`npx json-server db.json -m ./node_modules/json-server-auth --routes src/routes.json`

### 3. Run tests
`npm run test:jest` or `npm run test:mocha`

or even better execute `npm test`
(it will run tests, generate allure report and open it in browser)


## Comments
1. I have grouped all the tests into one file intentionally. Think there is no need to divite into files/suites with such small amount of tests.
If there are more tests - the better solution is to move tests between files/suites.

2. I do several checks inside one test. Thats also deliberate decision.
In other case there is need in "describe" and "beforeAll" blocks. But I don't see need of it in this case.