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


- Once you have added your db config as listed above,go to the src folder from your terminal
and execute `npx sequelize db:create`


`npx sequelize db:migrate`



`Flights system design`


![flights_system_design](https://github.com/Rahemanali-24/FlightsAndSearchService/assets/159017790/cb00d6dd-0432-4d7e-be83-84da4c0c63dc)




## DB Design
   
   - Airplane Table
   - Flight
   - Airport
   - City

   - A flight belongs to an airplane but one airplane can be used in multiple flights
   - A city has many airports but one airport belongs to a city
   - One airport can have many flights, but a flight belongs to one airport

    Migration Help you to do incremental changes to you
    
   
![Screenshot from 2024-05-27 12-27-47](https://github.com/Rahemanali-24/FlightsAndSearchService/assets/159017790/25027061-0b97-4d52-9bd2-cbbf0652e49b)

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


   