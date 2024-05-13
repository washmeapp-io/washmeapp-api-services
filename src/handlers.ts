import { getNotFoundResponse } from "./utils";
import createCarwash from "./http/create-carwash";

export const handleHttpRequests = async (event: any, context: any) => {
  const httpMethod = event.httpMethod;
  const path = event.path;
  console.log(
    `handleHttpRequests - Received method ${httpMethod} in the path ${path}`,
  );
  console.log(JSON.stringify(event));
  // Attempt to parse the request body if present
  let requestBody;
  if (event.body) {
    try {
      requestBody = JSON.parse(event.body);
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid JSON format in request body.",
        }),
      };
    }
  }

  const resource = `${httpMethod}-${path}`;
  switch (resource) {
    case "POST-services/carwash/create":
      const services = requestBody.services
        ? new Map(Object.entries(requestBody.services))
        : new Map();
      const address = requestBody.address;
      const hasElectricPlant = requestBody.hasElectricPlant;
      const hasIndividualWomanBathroom = requestBody.hasIndividualWomanBathroom;
      const hasIndividualManBathroom = requestBody.hasIndividualManBathroom;
      return await createCarwash({
        address,
        hasElectricPlant,
        hasIndividualWomanBathroom,
        hasIndividualManBathroom,
        services,
      });

    default:
      return getNotFoundResponse(path, httpMethod);
  }
};
