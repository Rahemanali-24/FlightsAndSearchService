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

   
   %3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%26lt%3Bfont%20style%3D%26quot%3Bfont-size%3A%2019px%3B%26quot%3B%26gt%3B1%20%3A%20n%26lt%3B%2Ffont%26gt%3B%22%20style%3D%22text%3Bhtml%3D1%3Balign%3Dcenter%3BverticalAlign%3Dmiddle%3BwhiteSpace%3Dwrap%3Brounded%3D0%3BfillColor%3D%23e1d5e7%3BstrokeColor%3D%239673a6%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22-840%22%20y%3D%22130%22%20width%3D%2270%22%20height%3D%2250%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E

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


   