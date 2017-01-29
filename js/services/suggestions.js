app.factory('suggestions', [function(){
  var demoSuggestions = {
    posts: [
      {
        title: 'Free pizza at club meetings',
        upvotes: 15,
        comments: [
            { content: 'is it free tho?', upvotes: 6 }, 
            { content: "nice!", upvotes: 4 } 
        ]
      },
      {
        title: 'End all club emails with Laffy Taffy jokes',
        upvotes: 9,
        comments: [
            { content: 'he he hu he hu ha ha', upvotes: 3 }, 
            { content: 'holy christ', upvotes: 1 } 
        ]
      },
      {
         title: 'Retrofit water fountain with Gatorade',
         upvotes: 3,
         comments: [
            { content: 'holy moly', upvotes: 0 }, 
            { content: 'stupid idea', upvotes: 0 } 
        ]
      },
      {
         title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
         upvotes: 7,
         comments: [
            { content: 'not funny', upvotes: 0 }, 
            { content: 'not funny at all', upvotes: 0 } 
        ]
      }
    ]
  };
  return demoSuggestions;
}]);
