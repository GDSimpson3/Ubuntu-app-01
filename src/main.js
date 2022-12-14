
pkg.initGettext();
pkg.initFormat();
pkg.require({
  'Gio': '2.0',
  'Gtk': '3.0'
});

const { Gio, Gtk } = imports.gi;

const { FirstAppWindow } = imports.window;

function main(argv) {
    const application = new Gtk.Application({
        application_id: 'org.example.App',
        flags: Gio.ApplicationFlags.FLAGS_NONE,
    });

    application.connect('activate', app => {
        let activeWindow = app.activeWindow;
        
        if (!activeWindow) {
            activeWindow = new FirstAppWindow(app);
        }

        activeWindow.present();
    });

    return application.run(argv);
}
