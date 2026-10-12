// import { useEffect, useState } from "react";

export function App() {
  // const [selectedTrackId, setSelectedTrackId] = useState(null);
  // const [selectedTrack, setSelectedTrack] = useState(null);
  // const [tracks, setTracks] = useState(null);

  // useEffect(() => {
  //   console.log("effect");
  //   fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
  //     headers: {
  //       "api-key": "e250e99e-f3a4-4259-8caf-b87e6ef3cecc",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setTracks(json.data));
  // }, []);

  // useEffect(() => {
  //   if(!selectedTrackId){
  //     return;
  //   }

  //   fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId, {
  //     headers: {
  //       "api-key": "e250e99e-f3a4-4259-8caf-b87e6ef3cecc",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setSelectedTrack(json.data));
  // }, [selectedTrackId])

  // if (tracks === null) {
  //   return (
  //     <div>
  //       <h1>Musicfun</h1>
  //       <span>Loading...</span>
  //     </div>
  //   );
  // }

  // if (tracks.length === 0) {
  //   return (
  //     <div>
  //       <h1>Musicfun Player, it-incubator</h1>
  //       <span>No tracks</span>
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <h1>Musicfun Player</h1>
  //     <button
  //       onClick={() => {
  //         setSelectedTrackId(null);
  //         setSelectedTrack(null);
  //       }}
  //     >
  //       Reset selection
  //     </button>
  //     <div
  //       style={{
  //         display: "flex",
  //         gap: "0px",
  //       }}
  //     >
  //       <ul>
  //         {tracks.map((track) => {
  //           return (
  //             <li
  //               key={track.id}
  //               style={{
  //                 border:
  //                   track.id == selectedTrackId ? "1px solid orange" : "none",
  //               }}
  //             >
  //               <div
  //                 onClick={() => {
  //                   setSelectedTrackId(track.id);
  //                 }}
  //               >
  //                 {track.attributes.title}
  //               </div>
  //               <audio
  //                 controls
  //                 src={track.attributes.attachments["0"].url}
  //               ></audio>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //       <div>
  //         <h3>Details</h3>
  //         {!selectedTrack && !selectedTrackId && "Track is not selected"}
  //         {!selectedTrack && selectedTrackId && "Loading..."}
  //         {selectedTrack &&
  //           selectedTrackId &&
  //           selectedTrack.id !== selectedTrackId &&
  //           "Loading..."}
  //         {/*если треки есть, покажем JSX*/}
  //         {selectedTrack && (
  //           <div>
  //             <h3>{selectedTrack.attributes.title}</h3>
  //             <h4>Lyrics</h4>
  //             <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}

//  export const name = "AppFileComponent";
