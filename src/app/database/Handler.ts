export class Handler {

  load() {
    if(localStorage.getItem('markers') === null ||
       localStorage.getItem('markers') === undefined) {

      console.log('No markers found...  Creating');

      var markers = [
        {
          name: 'Home 1 $somevalue1', lat: 34.014319, lng: -118.485495, draggable: true
        },
        {
          name: 'Home 2 $somevalue2', lat: 34.025212, lng: -118.496585, draggable: true
        },
        {
          name: 'Home 3 $somevalue3', lat: 34.036105, lng: -118.492770, draggable: true
        }
      ]

      localStorage.setItem('markers', JSON.stringify(markers));

    } else {
        console.log('Loading Markers...');
    }
  }
}
