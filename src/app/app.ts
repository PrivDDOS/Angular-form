import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ClientInfo } from '../models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-form');

  formStep = 1;

  clientInfo = new ClientInfo('', '', '')

  onSubmit(form: NgForm) {
    console.log('Your Info', {
      client: this.clientInfo
    })
  }
}
