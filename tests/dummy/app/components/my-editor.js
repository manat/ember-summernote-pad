import Ember from 'ember';
import layout from '../templates/components/my-editor';

export default Ember.Component.extend({
    toolbar: [
        ['style', ['style']],
        ['style', ['bold', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video', 'map']],
        ['misc', ['codeview', 'help']]
        ],
    map: {
        apiKey: 'AIzaSyALCBm4cAMf44UnLGIPDQzsZPp7pFTSnE0'
    },
    content: "<p>Hello, Summernote</p>"

});
