import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLogComponent } from './by-log.component';

describe('ByLogComponent', () => {
  let component: ByLogComponent;
  let fixture: ComponentFixture<ByLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByLogComponent]
    });
    fixture = TestBed.createComponent(ByLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
