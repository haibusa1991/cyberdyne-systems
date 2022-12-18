import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-verify-password-prompt',
  templateUrl: './verify-password-prompt.component.html',
  styleUrls: ['./verify-password-prompt.component.css']
})
export class VerifyPasswordPromptComponent {

  @Input() isPasswordValid: boolean = true;
  hasClickedOk: boolean = false

  @Output() hasCanceled = new EventEmitter<boolean>();
  @Output() password = new EventEmitter<string>();

  onOk() {
    // @ts-ignore
    this.password.emit(document.getElementById('password-field').value);
  }

  onCancel() {
    this.hasCanceled.emit(false);
  }
}
