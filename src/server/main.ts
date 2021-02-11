// Nest
import {NestFactory} from '@nestjs/core'

// App
import {AppModule} from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
}

bootstrap()
