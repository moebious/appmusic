import express, { Application } from 'express'
import morgan from 'morgan';
import config from './lib/config/config';
import cors from 'cors';
// Routes
import IndexRoutes from './lib/music/routes/indexRoute';
import UserRoutes from './lib/user/routes/userRoute';
import routesProtected from './lib/config/protected';
import {options} from '../swagger/swaggerOptions'
import swaggerOptions from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
// import {swaggerDocument} from'../swagger/swagger';
export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    public settings() {
        this.app.set('port', this.port || process.env.PORT || 5300);
        this.app.set('access-token', config.TOKEN_SECRET);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); 
    }
    
    private routes() {
        const specs = swaggerOptions(options)
        this.app.use(IndexRoutes);
        this.app.use('/docs',swaggerUI.serve, swaggerUI.setup(specs))
        this.app.use('/', UserRoutes, routesProtected);
        
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}

