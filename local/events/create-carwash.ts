import { getBaseEvent } from "./base-event";
import { getBaseContext } from "./base-context";
const body = {
  carWashId: "123",
  address: "dasfasf",
  ownerId: "abc",
  services: {
    "Car wash": {
      price: 10,
      duration: 30,
    },
  },
  hasElectricPlant: true,
  hasIndividualWomanBathroom: true,
  hasIndividualManBathroom: true,
};

const event = getBaseEvent({ path: "/carwash/create", method: "POST", body });
const context = getBaseContext();

export { event, context };
