/*when we need some thing, we import it*/
import { Component } from '@angular/core';


//meta data tells angular how to create this Component
@Component({
    selector: 'my-app',
    template: ` <div>Helloworld {{title}}</div>
                `,
    // styleUrls: ['styles/app.component.css']

})

export class AppComponent {
    title = "this is the app title";
}