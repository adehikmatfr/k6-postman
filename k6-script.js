// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js'

export let options = {
  ext: {
    loadimpact: {
      projectID: 3625695,
      // Test runs with the same name groups test runs together
      name: "KLOLLA STAGING"
    }
  },
  scenarios: {
    oneThousandRequest: {
      executor: "ramping-arrival-rate",
      preAllocatedVUs: 500,
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

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    integration_sc_base_url:
      "https://sc-http.integration.clodeo.s.vitamincode.id/",
  },
});

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function () {
  let id =  `${makeid(5)}_test` 
  // postman[Request]({
  //   name: "WebhookOrderShopee",
  //   id: "8c0ce32b-e1ae-4fa0-8764-8998f1353a79",
  //   method: "POST",
  //   address: "{{integration_sc_base_url}}webhook/shopee/order",
  //   data: '{\r\n    "shop_id": "1",\r\n    "data": {\r\n        "ordersn": ""\r\n    }\r\n}',
  // });

  // postman[Request]({
  //   name: "WebhookOrderTokopedia",
  //   id: "19476083-dd84-4c2d-bd11-21a4ec21b497",
  //   method: "POST",
  //   address: "{{integration_sc_base_url}}webhook/tokopedia/order",
  //   data: '{\r\n    "shop_id":"1",\r\n    "order_id":"1"\r\n}',
  // });

  postman[Request]({
    name: "WebhookOrderTiktok",
    id: "5981893b-6e0b-4d04-b3f4-6c4d4d2b214a",
    method: "POST",
    address: "{{integration_sc_base_url}}webhook/tiktok/order",
    data: `{\r\n    "type":1,\r\n    "shop_id":"7494913005296060948",\r\n    "data":{\r\n        "order_id":"tiktok${id}"\r\n    }\r\n}`,
  });
}