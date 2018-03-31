class Weather {
  constructor(city, state) {
    this.apiKey = '6eee9a6a5ddd5721';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`
    const response = await fetch(url);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}