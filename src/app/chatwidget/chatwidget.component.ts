import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chatwidget',
  imports: [CommonModule],
  templateUrl: './chatwidget.component.html',
  styleUrl: './chatwidget.component.css'
})
export class ChatwidgetComponent {
  public isChatBoxVisible: boolean = false;
  constructor() {
  }

  public toggleWidget() {
    this.isChatBoxVisible = !this.isChatBoxVisible;
  }
}
