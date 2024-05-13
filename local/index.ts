import { handleHttpRequests } from "../src/handlers";
import * as createCarWash from "./events/create-carwash";

const eventName = process.argv[3];
let response;
(async () => {
  switch (eventName) {
    case "create-car-wash":
      response = await handleHttpRequests(
        createCarWash.event,
        createCarWash.context,
      );
      console.log("----------RESPONSE-----------\n", response);
      break;

    default:
      response = handleHttpRequests({}, {});
      console.log("----------RESPONSE-----------\n", response);
      break;
  }
})();
