/**
 * Represents user role
 * @export
 * @class Role
 */
export class Role {
  constructor(private roleId: number) {}

  /**
   * Teacher role
   * @static
   * @type {Role}
   * @memberof Role
   */
  public static TEACHER: Role = new Role(0);
  /**
   * Pupil role
   * @static
   * @type {Role}
   * @memberof Role
   */
  public static PUPIL: Role = new Role(1);

  private static TYPE_VALUES = [
    {
      role: Role.TEACHER,
      name: 'Teacher'
    },
    {
      role: Role.PUPIL,
      name: 'Student'
    }];

  /**
   * Gets role name by role id
   * @static
   * @param {number} id
   * @returns {string}
   * @memberof Role
   */
  public static getRoleName(id: number): string {
    return Role.TYPE_VALUES[id]
      ? Role.TYPE_VALUES[id].name
      : '';
  }
}
