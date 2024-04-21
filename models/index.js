// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belong to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id' // Corrected foreign key
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id' // Corrected foreign key
});

// Products belong to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE' // Optional: cascade delete on product deletion
});

// Tags belong to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE' // Optional: cascade delete on tag deletion
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
