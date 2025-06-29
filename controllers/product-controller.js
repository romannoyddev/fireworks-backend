import Product from "../models/product.js";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Не удалось получить товары" });
  }
};

export const getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Товар не найден" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Ошибка при получении товара" });
  }
};

export const getByType = async (req, res) => {
  try {
    const products = await Product.find({ type: req.params.type });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Ошибка при получении товаров по типу" });
  }
};
