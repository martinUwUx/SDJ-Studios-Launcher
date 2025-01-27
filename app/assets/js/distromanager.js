const { DistributionAPI } = require('hasta-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'https://zelthoriaismp.cloud/nebula/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://breakcoreproyectmc.b-cdn.net/servers/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api