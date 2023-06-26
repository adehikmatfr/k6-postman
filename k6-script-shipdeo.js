import "./libs/shim/core.js";

export let options = {
  ext: {
    loadimpact: {
      projectID: 3628180,
      // Test runs with the same name groups test runs together
      name: "LOCALY TEST SHIPDEO"
    }
  },
  scenarios: {
    stress: {
      executor: "ramping-arrival-rate",
      preAllocatedVUs: 1,
      timeUnit: "10m",
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

let initialAWB = "001255027091"
let maxAWB = 5

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
});

export default function () {
  for (let index = 0; index < maxAWB; index++) {
    console.log(`"00${+initialAWB + index}"`)
    postman[Request]({
      name: "Update Status",
      id: "0209fb69-fb81-470e-96e8-735d379e9e18",
      method: "POST",
      address: "https://partner-api-development.shipdeo.com/webhooks/sicepat",
      data: JSON.stringify({
        "airwayBillNumber": `"00${+initialAWB + index}"`,
        "status": "picked",
        "statusDateTime": "2022-07-20T15:00:00+07:00",
        "lastStatus": "confirmed",
        "lastStatusDateTime": "2022-07-20T13:00:00+07:00",
        "receiverName": null,
        "receiverRelation": null,
        "note": "Paket telah di pick up oleh SIGESIT"
      }),
      headers: {
        "Content-Type": "application/json",
        "auth-key": " fFCXu2s2ao1sPoyb4Nlj",
      },
    });
  }
}