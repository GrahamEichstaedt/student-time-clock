import { express, fs }  from 'express';
const router = express.Router();

router.post('/register', async (request, response) => {
        // User registration logic
        response.status(201).json({message: 'Profile created!'});
})

router.post('/login', async (request, response) => {
        // User auth logic
        if(isMatch) {
                // Generate a session token or JWT
                response.json({message: 'Login successful'});
        }
        else {
                response.json(401).json({message: 'Invalid credentials'});
                
        }
})