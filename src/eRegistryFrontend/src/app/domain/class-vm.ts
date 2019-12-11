import {UserVM} from './user-vm';

/**
 * Represents Class as View Model
 * @export
 * @class ClassVM
 */
export class ClassVM {
  /**
   * Class id
   * @type {number}
   * @memberof ClassVM
   */
  public id?: number;
  /**
   * Class name
   * @type {string}
   * @memberof ClassVM
   */
  public name: string;
  /**
   * Class grade
   * @type {number}
   * @memberof ClassVM
   */
  public grade: number;
  /**
   * List of class users
   * @type {UserVM[]}
   * @memberof ClassVM
   */
  public pupils: UserVM[] = [];
}
