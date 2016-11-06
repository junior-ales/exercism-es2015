const gigaSecInMilli = 10e11;

class Gigasecond {
  constructor(startDate) {
    this.startDate = startDate;
  }

  date() {
    return new Date(Number(this.startDate) + gigaSecInMilli);
  }
}

export default Gigasecond;
