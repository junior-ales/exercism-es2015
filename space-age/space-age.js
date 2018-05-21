const roundNumber = x => Number(x.toFixed(2)); // roundup to 2 decimal points

const earthYearInSecs = 31557600;
const orbitalPeriodMercury = 0.2408467;
const orbitalPeriodVenus = 0.61519726;
const orbitalPeriodMars = 1.8808158;
const orbitalPeriodJupiter = 11.862615;
const orbitalPeriodSaturn = 29.447498;
const orbitalPeriodUranus = 84.016846;
const orbitalPeriodNeptune = 164.79132;

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthYears = this.seconds / earthYearInSecs;
  }

  onEarth() {
    return roundNumber(this.earthYears);
  }

  onMercury() {
    return roundNumber(this.earthYears / orbitalPeriodMercury);
  }

  onVenus() {
    return roundNumber(this.earthYears / orbitalPeriodVenus);
  }

  onMars() {
    return roundNumber(this.earthYears / orbitalPeriodMars);
  }

  onJupiter() {
    return roundNumber(this.earthYears / orbitalPeriodJupiter);
  }

  onSaturn() {
    return roundNumber(this.earthYears / orbitalPeriodSaturn);
  }

  onUranus() {
    return roundNumber(this.earthYears / orbitalPeriodUranus);
  }

  onNeptune() {
    return roundNumber(this.earthYears / orbitalPeriodNeptune);
  }
}

export default SpaceAge;
