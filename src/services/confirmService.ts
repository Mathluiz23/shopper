import Measure from '../models/Measure';

export const confirmMeasure = async (measure_uuid: string, confirmed_value: number): Promise<void> => {
  const measure = await Measure.findOne({ where: { measure_uuid } });

  if (!measure) {
    throw new Error('MEASURE_NOT_FOUND');
  }

  if (measure.has_confirmed) {
    throw new Error('CONFIRMATION_DUPLICATE');
  }

  measure.measure_value = confirmed_value;
  measure.has_confirmed = true;
  await measure.save();
};
