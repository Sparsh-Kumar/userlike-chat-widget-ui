import { Component } from '@angular/core';
import { ChatwidgetComponent } from '../chatwidget/chatwidget.component';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { CommonModule } from '@angular/common';
import { ChatBoxConfig } from '../chatbox/types';
import { ChatWidgetConfig } from '../chatwidget/types';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { LooseObject } from '../services/types';
import { USERLIKE_EVENTS } from '../events/events';

@Component({
  selector: 'app-userlike',
  imports: [
    ChatwidgetComponent,
    ChatboxComponent,
    CommonModule
  ],
  templateUrl: './userlike.component.html',
  styleUrl: './userlike.component.css'
})
export class UserlikeComponent {
  public isChatBoxVisible: boolean = false;

  public chatBoxConfig: ChatBoxConfig = {
    chatBoxHeading: 'Chatbot',
    btnIcnTop: 'close',
    btnIcnChatBox: 'smart_toy',
    sendBtnIcn: 'send',
    chatBoxIncomingPara: 'Hi there 👋 How can I help you today?',
    chatBoxOutgoingPara: 'Lorem ipsum dolor sit amet consectetur.'
  }

  public chatWidgetConfig: ChatWidgetConfig = {
    isClicked: this.isChatBoxVisible,
    clickedInIcn: 'close',
    clickedOutIcn: 'mode_comment'
  }

  public chatBoxSubscription!: Subscription;
  public chatWidgetSubscription!: Subscription;

  constructor(
    private readonly _dataService: DataService,
  ) { }

  public ngOnInit() {
    this.chatBoxSubscription = this._dataService.chatBoxMsg$.subscribe((payload: LooseObject = {}) => {
      this.handleEventsPayload(payload);
    })
    this.chatWidgetSubscription = this._dataService.chatWidgetMsg$.subscribe((payload: LooseObject = {}) => {
      this.handleEventsPayload(payload);
    })
  }

  private handleEventsPayload(payload: LooseObject = {}) {
    const { eventName = '' } = payload;
    if (eventName === USERLIKE_EVENTS.CLOSE_CHATBOX) {
      this.isChatBoxVisible = false;
    }
    if (eventName === USERLIKE_EVENTS.TOGGLE_CLICK) {
      this.isChatBoxVisible = !this.isChatBoxVisible;
      this.chatWidgetConfig.isClicked = this.isChatBoxVisible;
    }
  }

  public toggleWidget(event: boolean) {
    this.isChatBoxVisible = event;
  }

  public closeChatBox() {
    this.isChatBoxVisible = false;
  }

  public ngOnDestroy() {
    this.chatBoxSubscription.unsubscribe();
    this.chatWidgetSubscription.unsubscribe();
  }
}
