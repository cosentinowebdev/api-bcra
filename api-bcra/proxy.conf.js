const PROXY_CONFIG = [
    {
        context: [
            "/milestones",
        ],
        target: "https://api.estadisticasbcra.com",
        secure: false
    }
]

module.exports = PROXY_CONFIG;