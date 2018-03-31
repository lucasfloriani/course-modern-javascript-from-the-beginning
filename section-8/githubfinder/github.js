class GitHub {
  constructor() {
    this.client_id = 'add64605a67c0116a861';
    this.client_secret = 'f546e9575c515e6f0b97cea744cfd42f4a0e2003';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const profileResponse = await fetch(profileUrl);

    const repoUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const repoResponse = await fetch(repoUrl);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}