export type TrackDetailsResource = {
  id: string,
  attributes: {
    title: string,
    lyrics: string | null,
  }
}

export type GetTrackDetailsOutput = {
    data: TrackDetailsResource
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/"
         + trackId, {
          headers: {
            //"api-key": "e250e99e-f3a4-4259-8caf-b87e6ef3cecc",
          },
        })
          .then((res) => res.json())

          return promise
}

export type TrackListItemResource = {
  id: string,
  attributes: TrackListItemAttributes
}

export type GetTrackListOutput = {
    data: Array<TrackListItemResource>
}


type TrackListItemAttributes = {
    title: string,
    attachments: Array<AttachmentDto>
  }


type AttachmentDto = {
  url: string
}


export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        //"api-key": "e250e99e-f3a4-4259-8caf-b87e6ef3cecc",
      },
    })
      .then(res => res.json())

      return promise
}