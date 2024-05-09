import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorService } from '../color.service';
import { color } from '../color';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  colors: color[] = [];
    

  constructor(public colorService: ColorService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.colorService.getAll().subscribe((data: color[])=>{
      this.colors = data;
      console.log(this.colors);
    })  
  }
    
  
  

}
