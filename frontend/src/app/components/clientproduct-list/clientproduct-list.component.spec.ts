import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientproductListComponent } from './clientproduct-list.component';

describe('ClientproductListComponent', () => {
  let component: ClientproductListComponent;
  let fixture: ComponentFixture<ClientproductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientproductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
