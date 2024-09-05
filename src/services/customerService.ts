import Measure from '../models/Measure';

export const listCustomers = async () => {
  const customers = await Measure.findAll({
    attributes: ['customer_code'],
    group: ['customer_code']
  });

  if (!customers || customers.length === 0) {
    throw new Error('Nenhum cliente encontrado com medidas registradas');
  }

  return customers.map(customer => customer.customer_code);
};



