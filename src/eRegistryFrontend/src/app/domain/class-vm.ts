import {UserVM} from './user-vm';

export class ClassVM {
  public id: number;
  public name: string;
  public grade: number;
  public pupils: UserVM[] = [];
}
