// Nest
import {Controller, Get, Res, Req} from '@nestjs/common'

// Third-party
import {Request, Response} from 'express'

// App
import {ViewService} from './view.service'

@Controller('/')
export class ViewController {
    constructor(private viewService: ViewService) {
    }

    @Get('*')
    static(@Req() req: Request, @Res() res: Response) {
        const handle = this.viewService.getNextServer()
            .getRequestHandler()
        handle(req, res)
    }
}
