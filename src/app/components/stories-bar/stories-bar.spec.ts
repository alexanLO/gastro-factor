import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesBar } from './stories-bar';

describe('StoriesBar', () => {
  let component: StoriesBar;
  let fixture: ComponentFixture<StoriesBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriesBar],
    }).compileComponents();

    fixture = TestBed.createComponent(StoriesBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
