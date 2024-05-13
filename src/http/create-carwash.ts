interface ICreateCarwashArgs {
  address: string;
  hasElectricPlant: boolean;
  hasIndividualWomanBathroom: boolean;
  hasIndividualManBathroom: boolean;
  services: Map<any, any>;
}

export default async function createCarwash(
  args: ICreateCarwashArgs,
): Promise<void> {}
