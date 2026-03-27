const Nav = function(penergia){
    this.energia = penergia
    this.disparo = 100
}

let n1 = new Nav(100);

Nav.prototype.poder = 77

Nav.prototype.disparar = function(disparos) {
    if (this.disparo > 0) {
        this.disparo-=disparos;
    }
}

console.log(Nav);
console.log(n1);
console.log(n1.energia);
console.log(n1.poder);
n1.disparar(10)