/**
 * Using object literals
 * 
 */
var myModule = {
 
    myProperty: "someValue",
   
    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
      useCaching: true,
      language: "en"
    },
   
    // a very basic method
    saySomething: function () {
      console.log( "Where in the world is Paul Irish today?" );
    },
   
    // output a value based on the current configuration
    reportMyConfig: function () {
      console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
    },
   
    // override the current configuration
    updateMyConfig: function( newConfig ) {
   
      if ( typeof newConfig === "object" ) {
        this.myConfig = newConfig;
        console.log( this.myConfig.language );
      }
    }
  };
   
  // Outputs: Where in the world is Paul Irish today?
  myModule.saySomething();
   
  // Outputs: Caching is: enabled
  myModule.reportMyConfig();
   
  // Outputs: fr
  myModule.updateMyConfig({
    language: "fr",
    useCaching: false
  });
   
  // Outputs: Caching is: disabled
  myModule.reportMyConfig();

  /**
   * Self cvontained module
   */
  var testModule = (function () {
 
    var counter = 0;
   
    return {
   
      incrementCounter: function () {
        return counter++;
      },
   
      resetCounter: function () {
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
      }
    };
   
  })();
   
  // Usage:
   
  // Increment our counter
  testModule.incrementCounter();
   
  // Check the counter value and reset
  // Outputs: counter value prior to reset: 1
  testModule.resetCounter();

  /**
   * For public and private members use the following patten
   */

  var myNamespace = (function () {
 
    var myPrivateVar, myPrivateMethod;
   
    // A private counter variable
    myPrivateVar = 0;
   
    // A private function which logs any arguments
    myPrivateMethod = function( foo ) {
        console.log( foo );
    };
   
    return {
   
      // A public variable
      myPublicVar: "foo",
   
      // A public function utilizing privates
      myPublicFunction: function( bar ) {
   
        // Increment our private counter
        myPrivateVar++;
   
        // Call our private method using bar
        myPrivateMethod( bar );
   
      }
    };
   
  })();

  /**
   * With mixins
   */

   // Global module
var myModule = (function ( jQ, _ ) {
 
    function privateMethod1(){
        jQ(".container").html("test");
    }
 
    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }
 
    return{
        publicMethod: function(){
            privateMethod1();
        }
    };
 
// Pull in jQuery and Underscore
})( jQuery, _ );
 
myModule.publicMethod();