import { Model } from "mongoose";
import Admin, { AdminSchema } from "./Admin";
import Country, { CountrySchema } from "./Country";
import Season, { SeasonSchema } from "./Season";
import Brand, { BrandSchema } from "./Brand";
import Serie, { SerieSchema } from "./Serie";

interface Collections {
  admin: Model<AdminSchema, {}>;
  country: Model<CountrySchema, {}>;
  season: Model<SeasonSchema, {}>;
  brand: Model<BrandSchema, {}>;
  serie: Model<SerieSchema, {}>;
}

const collections: Collections = {
  admin: Admin,
  country: Country,
  season: Season,
  brand: Brand,
  serie: Serie,
};

export { AdminSchema, CountrySchema, SeasonSchema, BrandSchema, SerieSchema };
export default collections;
