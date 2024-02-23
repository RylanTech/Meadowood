import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import userRoutes from './routes/userRoutes'
import liveRoutes from './routes/liveRoutes'
import clipRoutes from './routes/clipRoutes'
import headerRoutes from './routes/headerRoutes'
import connectionRoutes from './routes/connectRoutes'
import staffRoutes from './routes/staffRoutes'

const app = express();

const corsOptions = {
    origin: [ 'http://localhost:3000' ]
};

const cors = require('cors');
app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use("/api/user", userRoutes)
app.use("/api/live", liveRoutes)
app.use('/api/clips', clipRoutes)
app.use('/api/header', headerRoutes)
app.use('/api/connection', connectionRoutes)
app.use('/api/staff/', staffRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3001);