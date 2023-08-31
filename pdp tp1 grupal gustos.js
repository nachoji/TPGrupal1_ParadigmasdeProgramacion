const rojo = {
  esFuerte() {
    return true
  }
}
const verde = {
  esFuerte() {
    return true
  }
}
const naranja = {
  esFuerte() {
    return true
  }
}
const celeste = {
  esFuerte() {
    return false
  }
}
const pardo = {
  esFuerte() {
    return false
  }
}
const cobre = {
  esBrilloso() {
    return true
  }
}
const vidrio = {
  esBrilloso() {
    return true
  }
}
const lino = {
  esBrilloso() {
    return false
  }
}
const madera = {
  esBrilloso() {
    return false
  }
}
const cuero = {
  esBrilloso() {
    return false
  }
}

const remera = {
  peso : 800,
  color : rojo,
  material : lino,
}

const pelota = {
  peso : 1300,
  color : pardo,
  material : cuero,
}

const biblioteca = {
  peso : 8000,
  color : verde,
  material : madera,
}

const munieco = {
  peso : 1,
  color : celeste,
  material : vidrio,
  darPeso(numero) {
    this.peso = numero
  }
}

const placa = {
  peso : 1,
  color : null,
  material : cobre,
  darPeso(numero) {
    this.peso = numero
  },
  darColor(color) {
    this.color = color
  }
}

const arito = {
  peso : 180,
  color : celeste,
  material : cobre,
}

const banquito = {
  peso : 1700,
  color : naranja,
  material : madera,
  darColor(color) {
    this.color = color
  }
}

const cajita = {
  peso : 400,
  color : rojo,
  material : cobre,
  darObjeto(objeto) {
    this.peso += objeto.peso
  }
}

const rosa = {
  leGusta(objeto) {
    return objeto.peso <= 2000 
  }
}

const estefania = {
  leGusta(objeto) {
    return objeto.color.esFuerte()
  }
}

const luisa = {
  leGusta(objeto) {
    return objeto.material.esBrilloso()
  }
}

const juan = {
  leGusta(objeto) {
    return !objeto.color.esFuerte()||objeto.peso >= 1200 && objeto.peso <=      1800
  }
}

const bolichito = {
  vidriera : remera,
  mostrador : pelota,
  ponerObjeto(objeto1,objeto2) {
    this.vidriera = objeto1,
    this.mostrador = objeto2
  },
  esBrillante() {
    return this.vidriera.material.esBrilloso() && this.mostrador.material.esBrilloso()
  },
  esMonocromatico() {
    return this.vidriera.color === this.mostrador.color
  },
  estaDesequilibrado() {
    return this.mostrador.peso > this.vidriera.peso 
  },
  tieneAlgoDeColor(color) {
    return this.vidriera.color === color || this.mostrador.color === color
  },
  puedeMejorar() {
    return this.esMonocromatico()||this.estaDesequilibrado()
  },
  puedeOfrecerleAlgoA(persona) {
    return persona.leGusta(this.vidriera)|| persona.leGusta(this.mostrador)
  }
}