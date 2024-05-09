import bcrypt from 'bcrypt';
const saltRounds = 10;

const registerUser = async (username, password) => {
        const passwordHash = await bcrypt.hash(password, saltRounds);

        // TODO set up postgreSQL and store in database
}

const loginUser = async (username, password) => {
        // Retrieve passwordHash from database
        // eslint-disable-next-line no-undef 
        // TODO remove the comment above later
        const isMatch = await bcrypt.compare(password, passwordHash);
        if(isMatch) {
                // Login successful
                // TODO Send message to front end to render admin page
        }
        else {
                // Login failed
                // TODO Send message to front end to render error page
        }
}

const monitorAttempts = (maxAttempts) => {
        
}