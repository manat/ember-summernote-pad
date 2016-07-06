import Ember from 'ember';

export default Ember.Component.extend({
    toolbar: [
        ['style', ['bold', 'underline', 'clear']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['link', 'picture', 'video', 'map']],
        ['misc', ['codeview', 'help']]
    ],
    pluginOptions: Ember.computed( function() {
        return {
            'map': {
                apiKey: 'AIzaSyC4wQxb6hFjF1nrDEg6ePZcTbmswq89hAE'
            }
        };
    }),

    actions: {
        onInit(param) {
            console.log('Summernote::onInit - ' + param);
        },

        onUpdate(updatedContent, $editable) {
            this.set('editorValue', updatedContent);
        }
    }
});
