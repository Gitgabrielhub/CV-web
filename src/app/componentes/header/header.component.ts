import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  downloadPdf():void{
    const link = document.createElement('a');
    link.href = "/CV-web/public/Currículo - Gabriel.docx";
    link.download = "Currículo-Gabriel.docx";
    link.click();
  }
}
