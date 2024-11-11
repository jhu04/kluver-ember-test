import Route from '@ember/routing/route';

export default class AlbumsRoute extends Route {
  async model(params) {
    console.log('client');
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    return await res.json();
  }
}
