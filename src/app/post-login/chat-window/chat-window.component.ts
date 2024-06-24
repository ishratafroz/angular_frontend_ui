import {
  Component,OnInit,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
  Input,
} from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
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

  constructor(private chatService: ChatService) {}

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
    var dto={question:this.messageContent }
    this.chatService.sendMessage(dto).subscribe({
      next: (response: any) => {

        const rcvMessage = {
          userId: '1',
          username: 'You',
          content: response.answer,
          time: timeFormater(new Date().toISOString()),
          image: '/assets/images/userimg.svg',
          type: 'sender',
        };
        this.messages = [...this.messages, rcvMessage];
        console.log('Message sent successfully:', response);
      },
      error: (error: any) => {
        console.error('Error sending message:', error);
      }
    });
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
export interface QnaDto {
  question?: string;
}