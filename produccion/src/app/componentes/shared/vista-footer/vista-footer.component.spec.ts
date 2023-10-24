import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaFooterComponent } from './vista-footer.component';

describe('VistaFooterComponent', () => {
  let component: VistaFooterComponent;
  let fixture: ComponentFixture<VistaFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaFooterComponent]
    });
    fixture = TestBed.createComponent(VistaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
