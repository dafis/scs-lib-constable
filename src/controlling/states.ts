
export abstract class ActiveState {
  abstract handleEvent(event: Event): ActiveState;
}
