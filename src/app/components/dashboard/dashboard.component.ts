import { CommonModule } from '@angular/common';
import { Component,  Renderer2, ElementRef, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent {
  fullScreen:boolean=true;
  itemList: any[] = [
    {
      iconName: 'dashboard',
      listName: 'Dashboard',
    },
    {
      iconName: 'inventory_2',
      listName: 'Products',
    },
    {
      iconName: 'category',
      listName: 'Categories',
    },
    {
      iconName: 'groups',
      listName: 'Coustomers',
    },
    {
      iconName: 'fact_check',
      listName: 'Inventory',
    },
    {
      iconName: 'poll',
      listName: 'Reports',
    },
    {
      iconName: 'settings',
      listName: 'Settings',
    },
  ];

  dashboard: any[] = [
    {
      itemName: 'PRODUCTS',
      itemIcon: 'inventory_2',
      itemTotal: 249,
    },
    {
      itemName: 'CATEGORIES',
      itemIcon: 'category',
      itemTotal: 34,
    },
    {
      itemName: 'COUSTOMERS',
      itemIcon: 'groups',
      itemTotal: 2459,
    },
    {
      itemName: 'ALERTS',
      itemIcon: 'notifications',
      itemTotal: 39,
    },
  ];

  // Sidebar Toggle
  sidebarOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef){}

  ngOnInit() {}
  openSidebar() {
    if (!this.sidebarOpen) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.classList.add('sidebar-responsive');
        this.sidebarOpen = true;
      }
    }
  }

  closeSidebar() {
    if (this.sidebarOpen) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.classList.remove('sidebar-responsive');
        this.sidebarOpen = false;
      }
    }
  }

  elem: any = document.documentElement;

  openFullscreen() {
   
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
      this.elem.msRequestFullscreen();
    }
    this.fullScreen=false
  }



  closeFullscreen() {
   

    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    this.fullScreen=true
  }
}
