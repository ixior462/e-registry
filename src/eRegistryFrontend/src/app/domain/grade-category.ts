export class GradeCategory {
  public static NONE: GradeCategory = new GradeCategory('---');
  public static TEST: GradeCategory = new GradeCategory('Test');
  public static SHORT_TEST: GradeCategory = new GradeCategory('Short test');
  public static ACTIVITY: GradeCategory = new GradeCategory('Activity');
  public static ORAL_ANSWER: GradeCategory = new GradeCategory('Oral answer');
  public static HOMEWORK: GradeCategory = new GradeCategory('Homework');
  public static PROJECT: GradeCategory = new GradeCategory('Project');

  constructor(public readonly categoryName: string) {}

  private static TYPE_VALUES = [
    GradeCategory.NONE,
    GradeCategory.SHORT_TEST,
    GradeCategory.TEST,
    GradeCategory.ACTIVITY,
    GradeCategory.ORAL_ANSWER,
    GradeCategory.HOMEWORK,
    GradeCategory.PROJECT
  ];

  public static values = () => GradeCategory.TYPE_VALUES;
}
