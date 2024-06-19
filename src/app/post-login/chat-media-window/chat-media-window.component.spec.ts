import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMediaWindowComponent } from './chat-media-window.component';

describe('ChatMediaWindowComponent', () => {
  let component: ChatMediaWindowComponent;
  let fixture: ComponentFixture<ChatMediaWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatMediaWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMediaWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
