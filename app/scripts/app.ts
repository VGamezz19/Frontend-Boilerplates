import { Vue } from 'vue-property-decorator';
import { router } from './app.router';
import { containerBuilder } from './app.container';
import { AppComponent } from './app.component';
import { CitiesSeed } from './core/seeds';
import { Filters } from './app.filters';


export class App {
    constructor() {
        containerBuilder();

        Vue.use(Filters);

        this.bootstrap();
    }

    private async seed(): Promise<void> {
        await new CitiesSeed().initialize();
    }

    private async bootstrap(): Promise<Vue> {
        await this.seed();

        let options = {
            el: '.main',
            router: router(),
            render: create => create(AppComponent)
        };

        return new Vue(options);
    }
}

new App();