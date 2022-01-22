import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPAgesLayoutComponent } from './common-pages-layout.component';

describe('CommonPAgesLayoutComponent', () => {
  let component: CommonPAgesLayoutComponent;
  let fixture: ComponentFixture<CommonPAgesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPAgesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPAgesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
