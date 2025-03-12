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

  redirectPort(e:Event):void{
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://github.com/Gitgabrielhub'
    link?.setAttribute('target','_blank');
    link.click();
  }
  redirectLinkedin(e:Event):void{
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://www.linkedin.com/in/gabriel-fonseca-7a67441a1/'
    link?.setAttribute('target','_blank');
    link.click();
  }


}
