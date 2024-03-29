Exaple Option
```
export let options = {
  ext: {
    loadimpact: {
      projectID: 3625695,
      // Test runs with the same name groups test runs together
      name: "LOCALY TEST"
    }
  },
  scenarios: {
    stress: {
      executor: "ramping-arrival-rate",
      preAllocatedVUs: 50,
      timeUnit: "1s",
      stages: [
        { duration: "2s", target: 10 }, // below normal load
        { duration: "5s", target: 10 },
        { duration: "2s", target: 20 }, // normal load
        { duration: "5s", target: 20 },
        { duration: "2s", target: 30 }, // around the breaking point
        { duration: "5s", target: 30 },
        { duration: "2s", target: 40 }, // beyond the breaking point
        { duration: "5s", target: 40 },
        { duration: "10s", target: 0 }, // scale down. Recovery stage.
      ],
    },
  },
};
```

run K6 with cloud
```
k6 run -o cloud k6-script.js
```

generate k6 with postman collection
```
node ./script/bin/postman-to-k6.js test-api.json -e env.json -o k6-script.js
```