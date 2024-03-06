// routes/example.ts

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *     type: object
 *     properties:
 *      id:
 *       type: string
 *       format: uuid
 *      name:
 *       type: string
 *       example: John Doe
 *      email:
 *       type: string
 *       example: johndoe@gmail.com
 *      phoneNumber:
 *       type: string
 *       example: +12345678901
 *      bio:
 *       type: string
 *       example: I am a software engineer
 *      roomies:
 *       type: integer
 *       example: 2
 *      tags:
 *       type: array
 *       example: [Vegetarian, Gymrat]
 *      gender:
 *       type: string
 *       example: Male
 *      age:
 *       type: integer
 *       example: 21
 *      image:
 *       type: string
 *       example: https://www.example.com/image.jpg
 *      employmentType:
 *       type: string
 *       example: Full-time
 *      employmentIndustry:
 *       type: string
 *       example: IT
 *      educationField:
 *       type: string
 *       example: Computer Science
 *      university:
 *       type: string
 *       example: Arizona State University
 */

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


/**
 * @swagger
 * /createUser:
 *  post:
 *   summary: Create a new user
 *   description: Create a new user with the input payload
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *       format: JWT
 *       description: JWT token for authorization
 *       required: true
 *   security:
 *    - bearerAuth: []
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 * 
 *   responses:
 *    200:
 *     description: User created successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 *    400:
 *     description: Invalid User details    
 */
router.post('/createUser', (req, res) => {
    res.json({ message: 'Hello, this is the login route to save the user details.' });
});

/**
 * @swagger
 * /updateUser/{id}:
 *  put:
 *   summary: Update user details
 *   description: Update user details by user id
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *       format: JWT
 *       description: JWT token for authorization
 *       required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *       format: uuid
 *       description: User id
 *       required: true
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *     schema:
 *      $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *     description: User details updated successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 */
router.put('/updateUser/:id', (req, res) => {
    res.json({ message: 'Hello, this is the login route to update the user details.' });
});

/**
 * @swagger
 * /user/{id}:
 *  get:
 *   summary: Get user details
 *   description: Get user details by user id
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *       format: JWT
 *       description: JWT token for authorization
 *       required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *       format: uuid
 *       description: User id
 *       required: true
 *   responses:
 *    200:
 *     description: User details retrieved successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 */
router.get('/user/:id', (req, res) => {
    res.json({ message: 'Hello, this route to get user details.' });
});

/**
 * @swagger
 * /matches/{id}:
 *  get:
 *   summary: Get appropriate matches
 *   description: Get appropriate matches for the user by user id
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *       format: JWT
 *       description: JWT token for authorization
 *       required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *       format: uuid
 *       description: User id
 *   responses:
 *    200:
 *     description: Appropriate matches retrieved successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 */
router.get('/matches/:id', (req, res) => {
    res.json({ message: 'Hello, this route to get appropraite matches for the particular user.' });
});

/**
 * @swagger
 * /topMatches/{id}:
 *  get:
 *   summary: Get top 10 matches
 *   description: Get top 10 matches for the user by user id
 *   parameters:
 *    - in: header
 *      name: Authorization
 *      schema:
 *       type: string
 *       format: JWT
 *       description: JWT token for authorization
 *       required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *       format: uuid
 *       description: User id
 *   responses:
 *    200:
 *     description: Top matches retrieved successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 */
router.get('/topMatches/:id', (req, res) => {
    res.json({ message: 'Hello, this route to get top matches for the particular user.' });
});
export default router;
