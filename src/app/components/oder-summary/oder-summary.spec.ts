import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderSummary } from './oder-summary';

describe('OderSummary', () => {
  let component: OderSummary;
  let fixture: ComponentFixture<OderSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OderSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(OderSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
