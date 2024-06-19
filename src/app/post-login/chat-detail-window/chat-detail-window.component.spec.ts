import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailWindowComponent } from './chat-detail-window.component';

describe('ChatDetailWindowComponent', () => {
  let component: ChatDetailWindowComponent;
  let fixture: ComponentFixture<ChatDetailWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatDetailWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
