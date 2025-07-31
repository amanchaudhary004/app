// backend/db/database.js
const Database = require('better-sqlite3');
const db = new Database('ecommerce.db');

db.exec(`
  DROP TABLE IF EXISTS products;

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    cost REAL,
    category TEXT,
    name TEXT,
    brand TEXT,
    retail_price REAL,
    department TEXT,
    sku TEXT,
    distribution_center_id INTEGER
  );
`);

module.exports = db;
