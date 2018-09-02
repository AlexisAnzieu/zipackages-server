module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './bin/www'
    return config
  }
}
