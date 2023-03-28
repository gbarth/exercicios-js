function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ //está no contexto de onde a função ta localizada, que é em "Pessoa"
        console.log(this.idade)
    }, 1000)
}

new Pessoa