/**
Template helper definitions for Underscore.
@license MIT. Copyright (c) 2016 hacksalot (https://github.com/hacksalot)
@module handlebars-helpers.js
*/


(function() {

  var HANDLEBARS = require('handlebars')
  , _ = require('underscore')
  , helpers = require('./generic-helpers');

  /**
  Register useful Underscore helpers.
  @method registerHelpers
  */
  module.exports = function( theme, opts, cssInfo, ctx, eng ) {

    helpers.theme = theme;
    helpers.opts = opts;
    helpers.cssInfo = cssInfo;
    helpers.engine = eng;
    ctx.h = helpers;

    _.each( helpers, function( hVal, hKey ) {
      if( _.isFunction( hVal )) {
        _.bind( hVal, ctx );
      }
    }, this);

  };

}());
