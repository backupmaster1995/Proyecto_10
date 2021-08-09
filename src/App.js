import axios from "axios";
import {useState, useEffect} from "react"
import ArtistInfo from "./components/ArtistInfo";
import Form from "./components/Form";
import Lyrics from "./components/Lyrics";
import Error from "./components/Error"

function App() {

  const [userSearch, setUserSearch] = useState({
    artist: "",
    song:""
  })
  const {artist, song} = userSearch

  const [lyrics, setLyrics] = useState("")
  const [artistInfo, setArtistInfo] = useState({})
 
  useEffect(() => {
   if(artist && song) {
      const getLyrics = async () => {
        const lyricsURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        const artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
        try {
          const [artistData, lyricsData] = await Promise.all([
            axios.get(artistURL),
            axios.get(lyricsURL)
          ])
          setLyrics(lyricsData.data.lyrics)
          setArtistInfo(artistData.data.artists[0])
        } catch (error) {
          console.error(error)
        }
      }
      getLyrics()
   }
  }, [userSearch])

  return (
    <>
      <Form 
        setUserSearch={setUserSearch}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo 
              artistInfo={artistInfo}
            />
          </div>

          <div className="col-md-6">
            <Lyrics 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
