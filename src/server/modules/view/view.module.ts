// Nest
import {Module} from '@nestjs/common'

// App
import {ViewController} from './view.controller'
import {ViewService} from './view.service'

@Module({
    imports: [],
    providers: [ViewService],
    controllers: [ViewController]
})
export class ViewModule {
}
