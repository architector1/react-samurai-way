import { useState, useEffect } from "react";
import { type TrackDetailsResource, getTrack } from "../dal/api";


export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] = useState<TrackDetailsResource | null>(null);

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }

    getTrack(trackId)
      .then((json) => setTrackDetails(json.data));
  }, [trackId]);


  return {
    trackDetails,
  };
}
