import { Component } from '@angular/core';
import {Link} from "../../shared/models/link";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navLinks: Link[] = [
    {title: 'Acceuil',        url: '/home',   isVisible: false},
    {
      title: 'Tournois',      url: '/tournament',           children: [
        {title: 'Index',      url: '/tournament/index'},
        {title: 'Nouveau',    url: '/tournament/add'}
      ], isVisible: false
    },
    {title: 'Nouveau membre', url: '/member', isVisible: false},
    {title: 'login',          url: '/login',  isVisible: false}
  ]


  toggleVisible(link: Link): void {

    let currentState = link.isVisible;


    this.navLinks.forEach(l => l.isVisible = false);


    link.isVisible = !currentState;
  }

}
