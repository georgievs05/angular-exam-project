import { Component, OnInit } from '@angular/core';
import { SmthWentWrongService } from './smth-went-wrong.service';

@Component({
  selector: 'app-smth-went-wrong',
  templateUrl: './smth-went-wrong.component.html',
  styleUrls: ['./smth-went-wrong.component.css']
})
export class SmthWentWrongComponent implements OnInit {
   message='';

  constructor(private smthWentWrongService: SmthWentWrongService){

  }

  ngOnInit(): void {
    this.smthWentWrongService.apiError$.subscribe((err:any)=>{
      this.message = err?.message  || ''
    })
  }
}
