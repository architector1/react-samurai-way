import clsx from "clsx";
import { type TrackListItemResource } from "../dal/api";
import styles from "./TracksList.module.css"

type Props = {
  isSelected: boolean,
  onSelect: (trackId: string) => void,
  track: TrackListItemResource
}

export function TrackItem({onSelect, track, isSelected}: Props) {
console.log(styles.track);
  const handleClick = () => onSelect?.(track.id)

  const title = track.attributes.title;

  const className = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected
  })

  return <li className={className} key={track.id}>
    <div onClick={handleClick}>
      {title.length > 40 ? title.substring(0, 37) + '...' : title}
    </div>
    <audio controls src={track.attributes.attachments["0"].url}></audio>
  </li>;
}

