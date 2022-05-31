### 1. Install modules
`npm i`

### 2. Run service
`npx json-server db.json -m ./node_modules/json-server-auth --routes src/routes.json`

### 3. Run tests
`npm run test:jest` or `npm run test:mocha`

or even better execute `npm test`
(it will run tests, generate allure report and open it in browser)


## Comments (please read)
1. I have grouped all the tests into one file intentionally. Think there is no need to divide cases into files/suites with such small amount of tests.
If there are more tests - the better solution is to move tests between files/suites.

2. I do several checks inside one test. That's also deliberate decision.
In other case there there is need in "describe" and "beforeAll" blocks. But I don't thinks it's the case for current setup.

3. The product development is very similar to this task execution. You should try to handle balance between quality and release speed.
So, I tried to do the same with a priority to speed. Give me the feedback on my POC and I will improve the quality, if required.


![](https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif)
