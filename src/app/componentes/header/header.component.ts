import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public clicks:boolean[] =[];
  increment:boolean = false;  

  ngOnInit(){
    console.log(this.clicks)
  }
  downloadPdf(e:any):void{
    e.preventDefault();
    const link = document.createElement('a');
    link.href = "https://docs.google.com/document/d/1Rp8cqfo7L35fIt56rgfrxTiZwhKMu49y/edit";
    link.download = "https://docs.google.com/document/d/1Rp8cqfo7L35fIt56rgfrxTiZwhKMu49y/edit";
    link.click();
    link?.setAttribute('target','_blank');
  }
  
  
  
}
