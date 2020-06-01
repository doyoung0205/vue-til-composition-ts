export function formatDate(value: string): string {
  // 필터 관련 함수가 존재하는 파일
  const date: Date = new Date(value);
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const monthStr: string = month > 9 ? month.toString() : `0${month}`;
  const day: number = date.getDate();
  const hours: number = date.getHours();
  const hoursStr: string = hours > 9 ? hours.toString() : `0${hours}`;
  const minutes: number = date.getMinutes();
  return `${year}-${monthStr}-${day} ${hoursStr}:${minutes}`;
}
