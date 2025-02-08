import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChatWidgetConfig } from './types';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { USERLIKE_EVENTS } from '../events/events';

@Component({
  selector: 'app-chatwidget',
  imports: [CommonModule],
  templateUrl: './chatwidget.component.html',
  styleUrl: './chatwidget.component.css'
})
export class ChatwidgetComponent {

  public chatBoxSubscription!: Subscription;

  @Input() chatWidgetConfig: ChatWidgetConfig = {
    isClicked: false,
    clickedInIcn: 'close',
    clickedOutIcn: 'mode_comment'
  }

  constructor(
    private readonly _dataService: DataService,
  ) { }

  public toggleWidget() {
    this._dataService.sendMsgToChatWidgetSubscribers({ eventName: USERLIKE_EVENTS.TOGGLE_CLICK })
  }
}
