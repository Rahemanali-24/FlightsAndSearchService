# Welcome to Flights Service


## Project setup
- clone the project on your local
- Execute 'npm install on the same path as of your root directory of the downloaded project'
- create a `.env` file in the root directory and add the following environment variable

    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following
piece of code


```
{
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }, 
}
```

`architecture`

        -src/
            index.js    //server
            models/
            controllers/
            middlewares/
            services/
            utils/
            config/
            repository/

          - tests/[last]
          - static/
          - temp/


    if you are not making src folder then if you tests or static thing that you want 
    to do then it will be not good when we want to deployment we don't do tests and others.


   