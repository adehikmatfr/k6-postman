// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";

export let options = {
  ext: {
    loadimpact: {
      projectID: 3647372,
      // Test runs with the same name groups test runs together
      name: "OCR Stress Test"
    }
  },
  scenarios: {
    stress: {
      executor: "ramping-arrival-rate",
      preAllocatedVUs: 50,
      timeUnit: "1m",
      stages: [
        { duration: "20s", target: 100 }, // below normal load
        { duration: "20s", target: 100 },
        { duration: "40s", target: 200 }, // normal load
        { duration: "40s", target: 200 },
        { duration: "10s", target: 0 }, // scale down. Recovery stage.
      ],
    },
  },
};

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
});

export default function () {
  postman[Request]({
    name: "https://ocr-http.labs.clodeo.s.vitamincode.id/image/parse-base64",
    id: "5fb2d8bc-3a68-4033-9afc-dd3bfcf00820",
    method: "POST",
    address: "https://ocr-http.labs.clodeo.s.vitamincode.id/image/parse-base64",
    data: '{\r\n    "base64_image": "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"\r\n}',
  });
}
