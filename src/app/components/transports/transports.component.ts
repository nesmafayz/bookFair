import { Component, OnInit } from '@angular/core';
import { TransportsService } from '../../services/transports.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transports.component.html',
  styleUrl: './transports.component.css'
})
export class TransportsComponent implements OnInit {
  busLines: any[] = [];
  constructor(private _transportService:TransportsService)
  {

  }
  ngOnInit(): void {
    this.busLines = this._transportService.getBusLines();
  }

}
