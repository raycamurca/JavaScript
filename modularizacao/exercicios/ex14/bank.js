// Crie uma classe Banco:
// • saldo
// • depositar()
// • sacar()
// • validar se saldo é suficiente

export class Banco {
  constructor(saldo) {
    this.saldo = saldo;
  }

  depositar(deposito) {
    return (this.saldo += deposito);
  }

  sacar(saque) {
    if(this.saldo>=saque){
      this.saldo-=saque
      return this.saldo
    } else{
      return `saldo insuficiente para realizar transação`
    }
  }
}