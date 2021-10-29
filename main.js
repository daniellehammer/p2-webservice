const express = require("express");

const http = require(express);

const allCoins = {};
const service = express();

service.get('/denomination', (request, response) => {
    response.json({
      ok: true,
      results: allCoins,
    });

    response.json({
        ok: false,
        results: `Coin does not exist in this collection`,
    })
  });


  service.post('/denomination/:year/:state', (request, response) => {
    const year = request.params.year;
    const state = request.params.state;
    const denomination = request.params.denomination;

    if (allCoins.hasOwnProperty(year) && allCoins.hasOwnProperty(state)) {
      response.status(400);
      response.json({
        ok: false,
        results: `The ${year} ${state} ${denomination} already exists in this collection.`,
      });

    } else {
        if (){
            //if Year exists but not state, just create state
        }

        else if() {
            //if state exists but not year, just create year
        }

        else{
            //if neither exist, create both
        }
      allCoins[]= 1;
      response.json({
        ok: true,
        results: {
          species: name,
          count: speciesCounts[name],
        },
      });
    }
  });


const port = 5000;
service.listen(port, () => {
    console.log(`We're live on port ${port}`);
});
