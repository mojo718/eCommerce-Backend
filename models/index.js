// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Catergory, {
  foreignKey: 'product_id'
});

// Categories have many Products
Category.hasManay(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  },
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongstoMant(Product, {
  through: {
    model: ProductTag
  },
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
