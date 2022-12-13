import "./App.css";
import Row from "./components/Row/Row";
import Apis from "./Apis";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner url={Apis.getNetflixOriginals}/>
      <Row title={"Netflix Origins"} url={Apis.getNetflixOriginals} cover={false} />
      <Row title={"Top Rated"} url={Apis.getTopRated} cover={true} />
      <Row title={"Trending now"} url={Apis.getTrendingNow} cover={true} />
      <Row title={"Actions Movies"} url={Apis.getActionsMovies} cover={true} />
      <Row title={"Romance Movies"} url={Apis.getRomanceMovies} cover={true} />
      <Row title={"Horror Movies"} url={Apis.getHorrorMovies} cover={true} />
      <Row title={"Comedy Movies"} url={Apis.getComedyMovies} cover={true} />
      <Row title={"Documentaries"} url={Apis.getDocumentaries} cover={true} />
      <Row title={"Science Fiction Movies"} url={Apis.getSfMovies} cover={true} />
    </div>
  );
}

export default App;
