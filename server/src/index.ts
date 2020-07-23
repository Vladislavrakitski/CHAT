import 'dotenv/config';

import express from 'express';
import { createServer } from 'http';
import { server } from './config/index';

import './core/db';
import createRoutes from './routes';
import createSocket from './core/socket';

const app = express();
const http = createServer(app);
const io = createSocket(http);

createRoutes(app, io);

const PORT: number = server.port ? Number(server.port) : 3003;

app.listen(PORT, () => {
	console.log(`Server: http://localhost:${PORT}`);
});
