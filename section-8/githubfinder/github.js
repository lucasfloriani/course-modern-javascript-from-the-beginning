class GitHub {
  constructor() {
    this.client_id = 'add64605a67c0116a861';
    this.client_secret = 'f546e9575c515e6f0b97cea744cfd42f4a0e2003';
  }

  async getUser(user) {
    const profileUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const profileResponse = await fetch(profileUrl);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}