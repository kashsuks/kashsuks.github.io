const LASTFM_USER = 'ksuks1';
const LASTFM_API_KEY = '84bc3dab1c9bd0d7ad3fce0df740d2eb';

async function getTrack() {
    try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;
        const res = await fetch(url);
        const json = await res.json();
        return json.recenttracks?.track?.[0] || null;
    } catch (error) {
        console.error('Error fetching Last.fm data:', error);
        return null;
    } 
}

async function updateMusicDisplay() {
    const starSites = document.querySelector('.star-sites');
    const track = await getTrack();
    
    if (!track) {
        starSites.innerHTML = `
            <h3 style="color: #0ce6f2; margin-bottom: 10px;">🎵 Music</h3>
            <p style="color: #4c79c3;">Unable to load track info</p>
        `;
        return;
    }

    const nowPlaying = track["@attr"]?.nowplaying === "true";
    const trackName = track.name || "Unknown";
    const artist = track.artist?.["#text"] || "Unknown";
    const trackUrl = track.url?.replace(/^"|"$/g, "") || "";
    
    const status = nowPlaying ? '🎵 Now playing:' : '🎵 Last played:';
    const playingIndicator = nowPlaying ? '<span style="color: #00ff00;">●</span> ' : '';
    
    starSites.innerHTML = `
        <h3 style="color: #0ce6f2; margin-bottom: 15px; font-size: 1.4rem;">
            ${playingIndicator}Music
        </h3>
        <div style="padding: 10px; border-left: 3px solid ${nowPlaying ? '#00ff00' : '#4c79c3'}; margin-left: 10px;">
            <p style="color: #4c79c3; font-size: 0.9rem; margin-bottom: 5px;">${status}</p>
            <p style="color: #6883d8; font-size: 1.1rem; margin-bottom: 5px; font-weight: bold;">
                ${trackUrl ? `<a href="${trackUrl}" target="_blank" style="color: #6883d8; text-decoration: none;">${trackName}</a>` : trackName}
            </p>
            <p style="color: #574fb0; font-size: 1rem; margin-bottom: 8px;">
                by ${artist}
            </p>
            <p style="color: #4c79c3; font-size: 0.8rem; opacity: 0.7;">
                🎧 via Last.fm
            </p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    updateMusicDisplay();
    setInterval(updateMusicDisplay, 15000);
});