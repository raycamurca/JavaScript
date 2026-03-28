// Polimorfismo

class Animal{ // class pai/base
    som(){
        console.log("som generico");
    }
}

class Cachorro extends Animal{ //class filho
    som(){
        console.log("Auauau");
    }
}

class Gato extends Animal{ //class filho
    som(){
        console.log("miau");
    }
}

class Pitinho extends Animal{ //class filho
    som(){
        console.log("piu piu");
    }
}

const animal = [
    new Animal(),
    new Cachorro(),
    new Gato(),
    new Pitinho()
]

animal.forEach(animal => {
    animal.som()
});

// const animalGenerico = new Animal();
// animalGenerico.som();

// const cachorro = new Cachorro();
// cachorro.som();

// const gato = new Gato();
// gato.som();

// const pitinho = new Pitinho();
// pitinho.som()