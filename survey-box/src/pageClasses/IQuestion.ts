export default interface IQuestion {
  questionType: string;
  questionColor: string;
  questionFontSize: number;
  questionText: string;
  answersColor: string;
  answersFontSize: number;
  answersText: Array<string>;
}
