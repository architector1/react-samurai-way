import { TrackItem } from "./TrackItem";
import { useTracks } from "../bll/useTracks";
import styles from "./TracksList.module.css"


type Props = {
  selectedTrackId: string | null,
  onTrackSelect: (id: string | null) => void
}

export function TracksList({onTrackSelect, selectedTrackId}: Props) {
  const {tracks} = useTracks()

  if (tracks === null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <span>No tracks</span>
      </div>
    );
  }

  const handleResetClick = () => {
      onTrackSelect?.(null)
    }

  const handleClick = (trackId: string) => {
                onTrackSelect?.(trackId)
              }

  return (
  <div style={{marginRight: '20px'}}>
    <button onClick={handleResetClick}>Reset</button>
    <hr />
    <ul className={styles.tracks}>
      {tracks.map((track) => {

        return (
          <TrackItem  key={track.id} 
                      track={track}
                      isSelected={track.id === selectedTrackId}
                      onSelect={handleClick}
          />
        );
      })}
    </ul>
    </div>
  );
}


