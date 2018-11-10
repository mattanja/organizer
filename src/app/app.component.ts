import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
//import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(private bottomSheet: MatBottomSheet) {

    let times = ["07:00", "09:00", "12:00", "14:00", "18:00", "20:00"];

    for (let day = 20180701; day <= 20180731; day++) {
      let dots = [];
      for (let x of times) {
        dots.push({ text: x, });
      }
      this.days.push({ text: day, dots: dots, });
    }
  }

  days = [];

  toolbarItems = [
    { text: '', },
    { text: 'Coiffeur', },
    { text: 'Birthday', },
    { text: 'a', },
    { text: 'b', },
    { text: 'c', },
    { text: 'd', },
  ];

  // onDragover(e:DragEvent) {
  //   console.log({ event: "dragover", e, });
  // }

  // onDrop(e:DropEvent, targetData: any) {
  //   console.log({ event: "dropped", e, targetData, });
  //   targetData.text = e.dragData.text;
  //   this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  // }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<mat-nav-list>
  <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Keep</span>
    <span mat-line>Add to a note</span>
  </a>

  <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Docs</span>
    <span mat-line>Embed in a document</span>
  </a>

  <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Plus</span>
    <span mat-line>Share with your friends</span>
  </a>

  <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Hangouts</span>
    <span mat-line>Show to your coworkers</span>
  </a>
</mat-nav-list>`,
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
