function techList(tec, name) {
    tec.sort();
    let n = [];
    if (tec.length === 0) {
      return 'Vazio!';
    } else {
      for (let i = 0; i < tec.length; i += 1) {
        n.push({ tech: tec[i], name: name });
      }
    }
    return n;
}

module.exports = techList;