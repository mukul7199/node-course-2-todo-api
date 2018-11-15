import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTodosComponent } from './complete-todos.component';

describe('CompleteTodosComponent', () => {
  let component: CompleteTodosComponent;
  let fixture: ComponentFixture<CompleteTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
