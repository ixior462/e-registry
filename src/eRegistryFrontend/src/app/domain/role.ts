export class Role {
  constructor(private roleId: number) {}

  public static TEACHER: Role = new Role(0);
  public static PUPIL: Role = new Role(1);

  private static TYPE_VALUES = [
    {
      role: Role.TEACHER,
      name: 'Teacher'
    },
    {
      role: Role.PUPIL,
      name: 'Pupil'
    }];

  public static getRoleName(id: number): string {
    return Role.TYPE_VALUES[id].name;
  }
}
