import Collections, {
  SerieSchema,
  BrandSchema,
  CountrySchema,
  SeasonSchema,
} from "../../models";
import controlRequest from "../../utils/controlRequest";
import env from "../../env";
import * as Types from "../../types";
import { capitalize, pluralize } from "../../utils/extra";

const { DEV, PORT } = env;

const getModel: Types.GetModel = {
  "/country": "country",
  "/season": "season",
  "/brand": "brand",
  "/serie": "serie",
};

type Schemas = SerieSchema | BrandSchema | CountrySchema | SeasonSchema;

interface ListItem {
  id: string;
  title: string;
  imageUrl: string;
}

export const getList = controlRequest(async (req, res) => {
  const isSerie = req.baseUrl === "/serie";
  const model = getModel[req.baseUrl];
  const CurModel = Collections[model];

  const fetchModel = CurModel.find();

  const fetchedList = isSerie
    ? await fetchModel.populate("brand")
    : await fetchModel;

  const list: ListItem[] | string =
    fetchedList.length !== 0
      ? fetchedList.map((item: Schemas) => {
          const title =
            item instanceof Collections.serie
              ? getSerieTitle(item)
              : item.title;

          return {
            id: item._id,
            imageUrl: DEV
              ? `http://localhost:${PORT}/${item.imageUrl}`
              : `http://192.168.0.153:${PORT}/${item.imageUrl}`,
            title,
          };
        })
      : `No ${pluralize(model)}`;

  return {
    status: 304,
    data: {
      list,
    },
  };
});

const getSerieTitle = (item: SerieSchema) => {
  const serieTitle = item.title;
  const brand = item.brand as BrandSchema;
  const brandTitle = brand.title;
  return `${serieTitle} - ${brandTitle}`;
};
