import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-common-pages-layout',
  templateUrl: './common-pages-layout.component.html',
  styleUrls: ['./common-pages-layout.component.scss']
})
export class CommonPAgesLayoutComponent implements OnInit {

  constructor(  private router: Router,) { }
  CurrentManu :any = 'List'
  ngOnInit(): void {
  }

  Pagecall(Page :any)
  {
    this.CurrentManu=Page;

    if(Page=='Add')
    {
      this.router.navigate(['page/Common/AdData']);
    }
    if(Page=='List')
    {
      this.router.navigate(['page/Common/List']);
    }
    if(Page=='LogOut')
    {
      sessionStorage.setItem('Islogin','false')
      this.router.navigate(['page']);
    }
    
   
  }

}
