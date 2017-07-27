/**
 * @fileoverview polymer related configs
 * @author Michael Stramel
 */
'use strict';

/* eslint-env node */
// ----------------------------------------------------------------------------
// Requirements
// ----------------------------------------------------------------------------
// const requireIndex = require('requireindex');

// ----------------------------------------------------------------------------
// Plugin Definition
//
// 2 == 'error', 1 == 'warning', 0 == 'off'
// ----------------------------------------------------------------------------

module.exports = {
  configs: {
    'polymer-1': {
      extends: ['eslint:recommended', 'eslint:google'],
      env: {
        'browser': true,
      },
      plugins: [
        'html',
      ],
      rules: {

      },
      globals: {
        'Polymer': false,
        'Promise': false,
      },
    },
    'polymer-2': {
      extends: ['eslint:recommended', 'eslint:google'],
      env: {
        'browser': true,
        'es6': true,
      },
      plugins: [
        'html',
      ],
      rules: {
        'new-cap': [2, {
          'capIsNewExceptionPattern': 'Mixin$',
        }],
      },
      globals: {
        'customElements': false,
        'Polymer': false,
      },
    },
  },
};


