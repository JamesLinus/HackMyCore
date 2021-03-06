/**
Implementation of the 'validate' verb for HackMyResume.
@module verbs/validate
@license MIT. See LICENSE.md for details.
*/



(function() {



  var FS = require('fs');
  var ResumeFactory = require('../core/resume-factory');
  var SyntaxErrorEx = require('../utils/syntax-error-ex');
  var chalk = require('chalk');
  var Verb = require('../verbs/verb');
  var HMSTATUS = require('../core/status-codes');
  var HMEVENT = require('../core/event-codes');
  var _ = require('underscore');



  /** An invokable resume validation command. */
  var ValidateVerb = module.exports = Verb.extend({

    init: function() {
      this._super('validate');
    },

    invoke: function() {
      this.stat( HMEVENT.begin, { cmd: 'validate' } );
      validate.apply( this, arguments );
      this.stat( HMEVENT.end );
    }

  });



  /** Validate 1 to N resumes in FRESH or JSON Resume format. */
  function validate( sources, unused, opts ) {

    if( !sources || !sources.length )
      throw { fluenterror: HMSTATUS.resumeNotFoundAlt, quit: true };

    var validator = require('is-my-json-valid');
    var schemas = {
      fresh: require('fresca'),
      jars: require('../core/resume.json')
    };

    var resumes = ResumeFactory.load( sources, {
      format: null,
      objectify: false
    }, this );

    // Validate input resumes. Return a { file: <f>, isValid: <v>} object for
    // each resume (valid, invalid, or broken).
    return resumes.map( function( src ) {

      var ret =  { file: src, isValid: false };

      // If there was an error reading the resume
      if( src.fluenterror ) {
        if( opts.assert ) throw src;
        this.setError( src.fluenterror, src );
        return ret;
      }

      // Successfully read the resume. Now parse it as JSON.
      var json = src.json, fmt = json.basics ? 'jrs' : 'fresh', errors = [];
      try {
        var validate = validator( schemas[ fmt ], { // Note [1]
          formats: {
             date: /^\d{4}(?:-(?:0[0-9]{1}|1[0-2]{1})(?:-[0-9]{2})?)?$/
          }
        });

        ret.isValid = validate( json );
        if( !ret.isValid ) {
          errors = validate.errors;
        }

      }
      catch( exc ) {
        return ret;
      }

      this.stat( HMEVENT.afterValidate, { file: src.file, isValid: ret.isValid,
        fmt: fmt.replace( 'jars', 'JSON Resume' ), errors: errors });

      if( opts.assert && !ret.isValid ) {
        throw { fluenterror: HMSTATUS.invalid, shouldExit: true };
      }

      return ret;

    }, this);

  }

}());
