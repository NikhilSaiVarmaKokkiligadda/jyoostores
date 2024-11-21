const express = require("express");
const router = express.Router();
const { searchProducts } = require("../controllers/search");

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search for products
 *     description: Search products by name, category, or other filters.
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: The search term for the product
 *       - in: query
 *         name: category
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional category to filter the search
 *       - in: query
 *         name: priceRange
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional price range (e.g., "0-100") to filter the search
 *     responses:
 *       200:
 *         description: A list of matching products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Product ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Product name
 *                     example: "Sample Product"
 *                   price:
 *                     type: number
 *                     description: Product price
 *                     example: 99.99
 */
router.get("/", searchProducts);

module.exports = router;
