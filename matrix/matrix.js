class Matrix {
  constructor(input) {
    this.rows = input.split('\n').map(s => s.split(' ').map(Number));
    this.columns = [];
  }
}

export default Matrix;
