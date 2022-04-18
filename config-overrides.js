const { ReactInspectorPlugin } = require('react-dev-inspector/plugins/webpack')
const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra')

/**
 * origin config: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
 *
 * customize-cra api code: https://github.com/arackaf/customize-cra/blob/master/src
 */
module.exports = override(
  /**
   * react-dev-inspector example configuration is as follows
   */

  addBabelPlugin([
    'react-dev-inspector/plugins/babel',
    {
      excludes: [],
    },
  ]),
  addWebpackPlugin(
    new ReactInspectorPlugin(),
  ),
)
