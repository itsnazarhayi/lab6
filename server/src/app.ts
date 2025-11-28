import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRoutes from './routes/contacts';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});