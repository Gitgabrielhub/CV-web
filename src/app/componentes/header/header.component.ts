import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  downloadPdf(e:any):void{
    e.preventDefault();
    const link = document.createElement('a');
    link.href = "https://docs.google.com/document/d/1Rp8cqfo7L35fIt56rgfrxTiZwhKMu49y/edit";
    link.download = "https://docs.google.com/document/d/1Rp8cqfo7L35fIt56rgfrxTiZwhKMu49y/edit";
    link.click();
    let button = document.getElementById("button");
    link?.setAttribute('target','_blank');
    let clicks = 0;
    clicks++;
    console.log(clicks)
    localStorage.setItem('clicks', clicks.toString());
  }
}
