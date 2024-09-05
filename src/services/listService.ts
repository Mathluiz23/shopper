import Measure from '../models/Measure';

export const listMeasuresByCustomer = async (customer_code: string, measure_type?: string) => {
  const whereClause: any = { customer_code };

  if (measure_type) {
    whereClause.measure_type = measure_type.toUpperCase();
  }

  const measures = await Measure.findAll({ where: whereClause });

  if (!measures || measures.length === 0) {
    throw new Error('MEASURES_NOT_FOUND');
  }

  return measures;
};
