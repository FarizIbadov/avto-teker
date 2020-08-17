import validator from "validator";
import Collections from "../../models";
import controlRequest from "../../utils/controlRequest";
import * as Types from "../../types";
import { capitalize } from "../../utils/extra";

interface Body {
  title: string;
  country: string;
  brand: string;
  description: string;
}

const getModel: Types.GetModel = {
  "/country": "country",
  "/season": "season",
  "/brand": "brand",
  "/serie": "serie",
};

export const addItem = controlRequest(async (req) => {
  const model = getModel[req.baseUrl];
  const CurModel = Collections[model];
  const body = req.body as Body;

  const newDocument = new CurModel({
    title: body.title,
    imageUrl: req.file.path,
  });

  if (newDocument instanceof Collections.brand) {
    newDocument.country = body.country;
    newDocument.description = body.description;
  } else if (newDocument instanceof Collections.serie) {
    newDocument.brand = body.brand;
    newDocument.description = body.description;
  }

  await newDocument.save();

  return {
    status: 201,
    data: {
      message: `${capitalize(model)} created!`,
    },
  };
});
