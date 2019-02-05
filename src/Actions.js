const moment = require('moment');

// This is the action / call used when the ReRun button is clicked.
// It's pretty yucky. In the real world this might be a call to the demo
// IP or robot IP/address where the tests live to actually re-run them, but
// since we don't have that right now and just want to demo the API we're
// going to make a call to the testbot API to mock a run and a single test.
// You can also do this in a more elegant, realistic, robust way using the 
// populate.py script found in the testbot repo itself.
const createRun = function() {
    console.log("Creating run ...");
    fetch(process.env.REACT_APP_TESTBOT_URL+'/runs/?format=json',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "label": "fakebot:",
                "status": "success",
                "duration": 123,
                "submitter": "script",
                "start": moment().format(),
                "end": moment().add(3, 'hours').format(),
                "test_set": [],
            })})
    .then(response => {return response.json()})
    .then(jsonResponse => {
        console.log("Creating test for run: ",jsonResponse.id);
        let run_id = jsonResponse.id;
        fetch(process.env.REACT_APP_TESTBOT_URL+'/tests/?format=json', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "label": "fakebot:",
                    "status": "success",
                    "duration": 123,
                    "start": moment().format(),
                    "end": moment().add(15, 'minutes').format(),
                    "run": run_id,
            })               
        })})
    .catch(function(e) {
          console.log("Error occurred loading data from API.");
    })
}

export { createRun };