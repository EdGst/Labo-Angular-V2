import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

import {Login} from "../../shared/models/login";
import {Token} from "../../shared/models/token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginData: Login = {};
  isLoggedIn: boolean = false;
  username: string | undefined;
  token: Token | undefined;

  constructor(private authService: AuthenticationService) {

  }

  ngOnInit() {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      // Set the login state to true and fetch the username if needed
      this.isLoggedIn = true;
      this.username = this.token?.user.username; // Replace this with actual code to fetch username
    }
  }

  onLogin(): void {
    this.authService.login(this.loginData).subscribe(
      (token: Token) => {
        // Connexion réussie, vous pouvez stocker le token dans le stockage local
        const authToken = token.token;
        this.token= token;
        if (authToken !== undefined) {
          localStorage.setItem('token', authToken);
          console.log('Login successful. Token:', authToken);
          this.isLoggedIn = true;
          // Mettez à jour le nom d'utilisateur si vous en avez un (par exemple, dans votre token)
          this.username = token.user.username;
        } else {
          console.error('Authentication token is undefined.');
        }
      },
      (error) => {
        // Gérer les erreurs de connexion ici
        console.error('Login failed. Error:', error);
      }
    );
  }

  logout(): void {
    // Supprimer le token du stockage local
    localStorage.removeItem('token');
    // Réinitialiser les informations liées à la connexion
    this.isLoggedIn = false;
    this.username = undefined;
    this.token = undefined;
  }


}
