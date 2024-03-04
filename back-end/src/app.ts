import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import userRoutes from './routes/userRoutes'
import liveRoutes from './routes/liveRoutes'
import clipRoutes from './routes/clipRoutes'
import headerRoutes from './routes/headerRoutes'
import connectionRoutes from './routes/connectRoutes'
import staffRoutes from './routes/staffRoutes'
import aboutRoutes from './routes/aboutRoutes'
import peopleRoutes from './routes/signUpUserRoutes'
import eventRoutes from './routes/signUpEventsRoutes'

const app = express();

const cors = require('cors');
app.use(cors());

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
app.use('/api/about/', aboutRoutes)
app.use('/api/people/', peopleRoutes)
app.use('/api/events/', eventRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3001);