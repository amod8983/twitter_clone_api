import app from './app.js';
import { config } from './src/config/env.js';


app.listen(config.port, () => {
    console.log(`App is running on port: ${config.port}`);
});