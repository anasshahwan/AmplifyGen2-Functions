import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../amplify/data/resource';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Amplifygen2-functions';

  client = generateClient<Schema>();

  async invokeLambdaFunction() {
    const res = await this.client.queries.sayHello({ name: 'Nice Work!!' });
    console.log(res);
  }
}
