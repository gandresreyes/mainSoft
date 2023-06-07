import { Component, OnInit } from '@angular/core';
import { NEVER } from 'rxjs';
import { ClimaServiceService } from 'src/app/services/clima-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  

  constructor(private climasvc:ClimaServiceService) {}
  ngOnInit(): void {
    
  }

}
