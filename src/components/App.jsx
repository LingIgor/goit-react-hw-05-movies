export const App = () => {
  return ( fetch ('https://api.themoviedb.org/3/movie/550?api_key=3f267efdd2dfa6b504977d892a47bb84').then( res => res.json()).then(data => console.log( data ))
   
   
  );
};
