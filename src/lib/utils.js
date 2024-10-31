export const JUST_DO =
  'Рекомендовано провести тиреоидологическое обследование в течение 3-х ближайших месяцев (уровни ТТГ, свТ4, УЗИ щитовидной железы, консультация эндокринолога)';
export const NO_NEEDS = 'Показаний к дополнительному тиреоидологическому обследованию не имеется';

export function getResult(answers) {
  const hasYesAnswer = answers.some((answer) => answer === 'yes');

  if (hasYesAnswer) {
    return JUST_DO;
  }

  const allNoAnswers = answers.every((answer) => answer === 'no' || answer === 'skip');

  if (allNoAnswers) {
    return NO_NEEDS;
  }

  return '';
}
