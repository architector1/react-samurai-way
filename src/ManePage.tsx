import { TracksDetail } from "./ui/TracksDetail";
import { TracksList } from "./ui/TracksList";
import { useTrackSelection } from "./bll/useTrackSelection";

export function ManePage() {

  const {trackId, setTrackId} = useTrackSelection();

  const handleTrackSelect = (id: string | null): void => {
          setTrackId(id)
        }

  return (
    <div>
     <div style={{ display: "flex" }}>
      <h1>Musicfun Player</h1>
        <TracksList 
            onTrackSelect={handleTrackSelect} 
            selectedTrackId={trackId}/>
        <TracksDetail trackId={trackId}/>
      </div>
    </div>
  );
}
  