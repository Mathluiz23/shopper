import Measure from '../models/Measure';

export const createMeasure = async (uuid: string, customerCode: string, measureType: string, value: number) => {
  return Measure.create({
    uuid,
    customer_code: customerCode,
    measure_type: measureType,
    value,
  });
};

export const updateMeasureValue = async (measureUUID: string, confirmedValue: number): Promise<string> => {
  const measure = await Measure.findOne({ where: { uuid: measureUUID } });

  if (!measure) {
    return 'NOT_FOUND';
  }

  if (measure.has_confirmed) {
    return 'ALREADY_CONFIRMED';
  }

  measure.measure_value = confirmedValue;
  measure.has_confirmed = true;
  await measure.save();

  return 'UPDATED';
};

export const getMeasuresByCustomerCode = async (customerCode: string, measureType?: string) => {
  const whereClause = {
    customer_code: customerCode,
    ...(measureType && { measure_type: measureType.toUpperCase() })
  };

  const measures = await Measure.findAll({ where: whereClause });
  return measures;
};
