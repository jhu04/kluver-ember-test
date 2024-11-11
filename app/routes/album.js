import Route from '@ember/routing/route';

export default class AlbumRoute extends Route {
  async model(params) {
    // This route was generated with a dynamic segment. Implement data loading
    // based on that dynamic segment here in the model hook.
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/albums/' + params.album_id,
    );
    const json = await res.json();
    console.log(json);
    return json;
  }
}
