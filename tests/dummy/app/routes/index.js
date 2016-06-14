import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            toolbar: [
                ['style', ['style']],
                ['style', ['bold', 'underline', 'clear']],
                ['fontsize', ['fontsize']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video', 'map']],
                ['misc', ['codeview', 'help']]
            ],
            extOptions: {
                'map': {
            	   apiKey: 'AIzaSyALCBm4cAMf44UnLGIPDQzsZPp7pFTSnE0'
                }
            },
            content: "<p>Hello, content</p>"
        };
    }
});
