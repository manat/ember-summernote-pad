import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            toolbar: [
                ['style', ['style']],
                ['style', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['insert', ['link', 'picture', 'video', 'map']],
                ['misc', ['codeview', 'help']]
            ],
            extOptions: {
                'map': {
            	       apiKey: 'AIzaSyC4wQxb6hFjF1nrDEg6ePZcTbmswq89hAE'
                }
            },
            content: "<p>Hello, Summernote</p>"
        };
    }
});
