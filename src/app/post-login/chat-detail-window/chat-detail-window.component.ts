import { Component, Input, OnInit } from '@angular/core';
import { generateRandomColor, randomColorShortNameGenerator } from 'src/utils/helpers';
import { availableChats, sampleChatDetail } from 'src/utils/static-data';

@Component({
  selector: 'app-chat-detail-window',
  templateUrl: './chat-detail-window.component.html',
  styleUrls: ['./chat-detail-window.component.css']
})
export class ChatDetailWindowComponent implements OnInit {
  @Input() onClose!: (args: any) => void;
  constructor() { }

  ngOnInit(): void {}

  chatDetailAssets = sampleChatDetail;
  randomColor1 = generateRandomColor();
  randomColor2 = generateRandomColor();
  randomColor3 = generateRandomColor();
  membersShortList = randomColorShortNameGenerator(availableChats)
  remainingMembs = availableChats.length - 2
  closeCard = () => this.onClose && this.onClose(false);
}
