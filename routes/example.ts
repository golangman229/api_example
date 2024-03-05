// routes/example.ts
/**
 * @swagger
 * /example:
 *   get:
 *     summary: Retrieve all examples
 *     responses:
 *       '200':
 *         description: A successful response
 */
import express from 'express';

const router = express.Router();

router.get('/example', (req, res) => {
    res.json({ message: 'Hello, this is an example route.' });
});

export default router;
