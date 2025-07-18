import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTopicsComponent } from './hot-topics.component';

describe('HotTopicsComponent', () => {
  let component: HotTopicsComponent;
  let fixture: ComponentFixture<HotTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
