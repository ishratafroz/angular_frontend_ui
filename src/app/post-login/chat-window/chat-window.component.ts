import {
  Component,OnInit,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
  Input,
} from '@angular/core';
import { scrollToBottom, timeFormater } from 'src/utils/helpers';
import {
  sampleChatHeaderJson,
  sampleChatJson,
  sampleInputJson,
} from 'src/utils/static-data';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements AfterViewInit {
  @ViewChildren('messageItem') messageItems!: QueryList<ElementRef>;

  @Input() onChatDetailsClick!: (args: any) => void;
  @Input() onMediaClick!: (args: any) => void;

  ngAfterViewInit() {
    this.messageItems.changes.subscribe(() => {
      scrollToBottom(this.messageItems);
    });
  }

  messageContent = '';
  messages = sampleChatJson;
  headerInfo = sampleChatHeaderJson;
  inputAssets = sampleInputJson;

  updateTextField(event: Event) {
    this.messageContent = (event.target as HTMLInputElement).value;
  }

  sendMessage(event?: Event) {
    const newMessage = {
      userId: '1',
      username: 'You',
      content: this.messageContent,
      time: timeFormater(new Date().toISOString()),
      image: '/assets/images/userimg.svg',
      type: 'user',
    };
    this.messages = [...this.messages, newMessage];
    this.messageContent = '';
    if (event?.type === 'click' || event) {
      const inputField = document.getElementById(
        'message-input'
      ) as HTMLInputElement;
      inputField.value = '';
    }
  }

  // mediaBtnClick() {
  //   this.onMediaClick && this.onMediaClick(true);
  // }

  chatDetailsBtnClick() {
    this.onChatDetailsClick && this.onChatDetailsClick(true);
  }
}
