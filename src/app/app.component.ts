import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
// import { DashboardComponent } from "./components/dashboard/dashboard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',

    imports: [CommonModule, RouterOutlet, ]
})
export class AppComponent {
  title = 'admin';
}
