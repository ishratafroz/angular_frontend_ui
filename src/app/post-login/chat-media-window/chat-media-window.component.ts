import { Component, Input, OnInit } from '@angular/core';
import {
  availableLinks,
  mediaStaticFiles,
  sampleMediaDetail,
} from 'src/utils/static-data';
import { HttpClient } from '@angular/common/http';
import * as cheerio from 'cheerio';
import { sumText } from 'src/utils/helpers';

@Component({
  selector: 'app-chat-media-window',
  templateUrl: './chat-media-window.component.html',
  styleUrls: ['./chat-media-window.component.css'],
})
export class ChatMediaWindowComponent implements OnInit {
  // @Input() onClose!: (args: any) => void;
  // selectedtab = 'Media';
  // tabs = ['Media', 'Links', 'Docs'];
  // links = availableLinks;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // chatDetailAssets = sampleMediaDetail;
  // closeCard = () => this.onClose && this.onClose(false);
  // tabSwitch = (newSelectedtab: string) => (this.selectedtab = newSelectedtab);
  // staticMedia = mediaStaticFiles;
  // summerizeText = (text: string, type: string) => sumText(text, type);
  // onLinkClick = (link: string) => window.open(link, '_blank');
}
