import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ClickToEdit extends Component {
  @tracked editMode = true;
  @tracked text = 'a';

  @action
  edit() {
    console.log('editing');
    this.editMode = true;
  }

  @action
  save() {
    console.log('saving');
    this.editMode = false;
  }
}
