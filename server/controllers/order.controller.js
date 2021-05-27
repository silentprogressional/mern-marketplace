import { Order, CartItem } from "../models/order.model";
import errorHandler from "./../helpers/dbErrorHandler";

const create = async (req, res) => {
  try {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    let result = await order.save();
    res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
};
