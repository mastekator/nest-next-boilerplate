// Nest
import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
// import * as path from 'path'

// Third-party
// import {I18nModule, I18nJsonParser} from 'nestjs-i18n'

// App
import {ViewModule} from './modules/view/view.module'

@Module({
    imports: [
        ViewModule,
        TypeOrmModule.forRoot()],
    controllers: [],
    providers: []
})
export class AppModule {
}
