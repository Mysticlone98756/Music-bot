module.exports = {
    app: {
        token: 'TOKEN',
        playing: 'personal bot for personal reasons',
        global: true,
        guild: '1032091051604856854'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '1032091051604856854',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
