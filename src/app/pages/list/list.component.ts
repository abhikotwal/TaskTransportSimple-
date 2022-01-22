import { Component, AfterViewInit,ViewChild,ViewChildren,ElementRef,QueryList,ChangeDetectorRef,HostListener } from '@angular/core'
import {fromEvent} from 'rxjs'
import {startWith,debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  @ViewChild('wrapper') wrapper:ElementRef
  @ViewChild('airport') airport:ElementRef
  dots:boolean=false
  variable = 'M0,100  C150,100 50,0 200,0';
  colors=['#FFEFD5','#FFDAB9','#FFA07A','#FF8C00','#FF6347']
  trips = [
    { text: 'BLR-MAA', level: 1 },
    { text: 'MAA-HYD', level: 1 },
    { text: 'BLR-HYD', level: 1 },
    { text: 'HYB-DEL', level: 0 },
    { text: 'HYB-DEL', level: 0 },
    { text: 'DEL-BLR', level: 1 },
  ];
  paths = [];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.paths=this.getPaths()
      
}
  constructor(private cdr:ChangeDetectorRef){}
  ngAfterViewInit() {
    setTimeout(()=>{
      this.paths=this.getPaths()

    })
  }
  redraw(){
    setTimeout(()=>{
      this.paths=this.getPaths()

    })
  }
  getPaths()
  {
    const rect=this.wrapper.nativeElement.getBoundingClientRect();
    let width=this.airport.nativeElement.getBoundingClientRect().width
    const space=(rect.width-width*this.trips.length)/(this.trips.length)
    width=width+space
    const paths = [];

    this.trips.forEach((trip, i) => {
      if (i) {
        const fromY = this.trips[i - 1].level * 50+1;
        const fromX = i * width - space;
        const toY = trip.level * 50+1;
        const toX = i *width;

        if (trip.level == this.trips[i - 1].level) {
          paths.push(
            'M' + fromX + ',' + fromY + ' L' + (toX) + ',' + toY
          );
        } else {
          const middle=(fromX+toX)/2
          paths.push(
            'M' + fromX + ',' + fromY + ' C' + middle + ',' + fromY+' '+middle+','+toY+' '+toX+','+toY
          );
        }
      }
    });
    return paths;
  }
}
