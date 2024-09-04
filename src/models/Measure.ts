import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

export class Measure extends Model {
  public measure_uuid!: string;
  public customer_code!: string;
  public measure_datetime!: Date;
  public measure_type!: string;
  public measure_value!: number;
  public image_url!: string;
  public has_confirmed!: boolean;
}

Measure.init({
  measure_uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  customer_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  measure_datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  measure_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  measure_value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  has_confirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  sequelize,
  tableName: 'measures',
  timestamps: false,
});

export default Measure;
