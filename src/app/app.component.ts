import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../amplify/data/resource';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { uploadData } from 'aws-amplify/storage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Amplifygen2-functions';
  selectedFile: File | null = null;

  client = generateClient<Schema>();

  async invokeLambdaFunction() {
    const res = await this.client.queries.sayHello({ name: 'Nice Work!!' });
    console.log(res);
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }
  async uploadFile() {
    if (!this.selectedFile) {
      alert('Please select a file first!');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    console.log('File selected:', this.selectedFile);

    const result = await uploadData({
      path: 'Files/' + this.selectedFile.name,
      data: this.selectedFile,
    }).result;
    console.log(result);
  }
}
