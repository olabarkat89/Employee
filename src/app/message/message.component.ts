import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
constructor(public dialogRef: MatDialogRef<MessageComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){}
}
