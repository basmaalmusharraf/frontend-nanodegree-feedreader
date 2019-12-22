/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
    * allFeeds variable has been defined and that it is not
    * empty. Experiment with this before you get started on
    * the rest of this project. What happens when you change
    * allFeeds in app.js to be an empty array and refresh the
    * page?
    */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
    * in the allFeeds object and ensures it has a URL defined
    * and that the URL is not empty.
    */


    /* TODO: Write a test that loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
  });
  describe('URL', function() {

    it('are defined', function() {
      for( var i=0;i<allFeeds.length;i++){
        expect(allFeeds[i].url).toBeDefined();//expecting URL defined.
        expect(allFeeds[i].url.length).not.toBe(0);//expecting URL not empty.
      }
    });


  });

  describe('Name', function() {

    it('are defined', function() {
      for( var i=0;i<allFeeds.length;i++){
        expect(allFeeds[i].name).toBeDefined();//expecting name defined.
        expect(allFeeds[i].name.length).not.toBe(0);//expecting name not empty.
      }
    });


  });
  //The menu.
  describe('The menu', function() {
    var body=document.getElementsByTagName("body")[0];
    it('hidden by default', function() {
      expect(body.classList).toContain('menu-hidden');



    });
    it('hide and display', function() {
      $('a.menu-icon-link').click();
      expect(body.classList).not.toContain('menu-hidden');
      $('a.menu-icon-link').click();
      expect(body.classList).toContain('menu-hidden');




    });

  });


  /* TODO: Write a test that ensures the menu changes
  * visibility when the menu icon is clicked. This test
  * should have two expectations: does the menu display when
  * clicked and does it hide when clicked again.
  */

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    beforeEach(function(done){
      window.loadFeed(0,done);//call function loadfeed.
    });
    it('Not empty',function(){
      expect($('.feed .entry').length).not.toBe(0);


    });
  });

  describe('New Feed Selection', function() {

    beforeEach(function(done){
      loadFeed(0, function () {
        feedAfterFirstLoad = $('.feed').html();
        loadFeed(1, function () {
          feedAfterSecondLoad = $('.feed').html();
          done();
        });
      });
    });
    it('New feed',function(){
      expect(feedAfterFirstLoad).not.toEqual(feedAfterSecondLoad);// newest feed, not equal oldest feed
    });
  });

}());
