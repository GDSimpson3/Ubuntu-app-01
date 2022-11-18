
const { GObject, Gtk } = imports.gi;

var FirstAppWindow = GObject.registerClass({
    GTypeName: 'FirstAppWindow',
    Template: 'resource:///org/example/App/window.ui',
    InternalChildren: ['label']
}, class FirstAppWindow extends Gtk.ApplicationWindow {
    _init(application) {
        super._init({ application });
    }
});

