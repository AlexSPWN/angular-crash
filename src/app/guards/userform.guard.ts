import { CanDeactivateFn } from '@angular/router';
import { UserRformComponent } from '../components/users/user-rform/user-rform.component';

export const userformGuard: CanDeactivateFn<UserRformComponent> = (
  component, currentRoute, currentState, nextState) => {
    if(component.hasChanges()) {
      return confirm("Are you sure?")
    } else {
      return true;
    }    
};
