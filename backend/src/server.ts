import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import {
  StatusCheck,
  StatusCheckCreate,
} from './types';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// In-memory storage (since MongoDB is not required)
const statusChecks: StatusCheck[] = [];

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGINS?.split(',') || '*',
  credentials: true,
}));
app.use(express.json());

// Routes
app.get('/api/', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.post('/api/status', async (req: Request, res: Response) => {
  try {
    const input: StatusCheckCreate = req.body;
    
    const statusObj: StatusCheck = {
      id: uuidv4(),
      client_name: input.client_name,
      timestamp: new Date(),
    };

    statusChecks.push(statusObj);
    res.json(statusObj);
  } catch (error) {
    console.error('Error creating status check:', error);
    res.status(500).json({ error: 'Failed to create status check' });
  }
});

app.get('/api/status', async (req: Request, res: Response) => {
  try {
    res.json(statusChecks);
  } catch (error) {
    console.error('Error fetching status checks:', error);
    res.status(500).json({ error: 'Failed to fetch status checks' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ API endpoints available at http://localhost:${PORT}/api`);
  console.log(`✓ Using in-memory storage (no database required)`);
});
