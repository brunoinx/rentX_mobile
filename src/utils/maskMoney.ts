export function maskMoney(money: number) {
  return money.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
