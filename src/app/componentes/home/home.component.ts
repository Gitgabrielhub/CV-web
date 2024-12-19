import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  content1:boolean = false;
  content2:boolean = false;
  content3:boolean = false;

  menu:boolean = false;

  mutateContent(){
    this.content1 = !this.content1;
    
  }
  mutateContent2(){
    this.content2= !this.content2;
    
  }
  mutateContent3(){
    this.content3 = !this.content3; 
  }

  toggleMenu(){
    this.menu = !this.menu;
  }


}
