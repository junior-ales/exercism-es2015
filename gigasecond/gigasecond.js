const gigaSecInMilli = 1e12;

class Gigasecond {
  constructor(startDate) {
    this.startDate = startDate;
  }

  date() {
    return new Date(this.startDate.getTime() + gigaSecInMilli);
  }
}

export default Gigasecond;
