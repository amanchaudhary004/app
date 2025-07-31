// GET all products
app.get('/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Product not found' });
});

// GET products by department
app.get('/products/department/:department', (req, res) => {
  const products = db.prepare('SELECT * FROM products WHERE department = ?').all(req.params.department);
  res.json(products);
});

// GET products by category
app.get('/products/category/:category', (req, res) => {
  const products = db.prepare('SELECT * FROM products WHERE category = ?').all(req.params.category);
  res.json(products);
});

// Load CSV once if DB is fresh
if (!fs.existsSync('ecommerce.db')) {
  loadCSV();
}

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
