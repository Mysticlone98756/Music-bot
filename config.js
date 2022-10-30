module.exports = {
    app: {
        token: 'MTAzMDA5MjkxNDUyNjc4MTUxMQ.G9SIwF.GZ2_zE0GJADuqhuzGi-491Jm_IByckWIUDj4vI',
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
