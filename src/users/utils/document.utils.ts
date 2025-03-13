export function isValidDocument(document: string): boolean {
  document = document.replace(/\D/g, '');
  if (document.length !== 11 || /^(\d)\1+$/.test(document)) return false;

  const calcDigit = (slice: string) => {
    let sum = 0;
    for (let i = 0; i < slice.length; i++) {
      sum += Number(slice[i]) * (slice.length + 1 - i);
    }
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const firstDigit = calcDigit(document.slice(0, 9));
  const secondDigit = calcDigit(document.slice(0, 10));

  return (
    firstDigit === Number(document[9]) && secondDigit === Number(document[10])
  );
}
