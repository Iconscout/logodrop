function showPanel(options) {
  var context = options.context;
  var webviewResource = options.webviewResource;
  var panelSettings = options.panelSettings;
  var delegateListeners = options.delegateListeners;

  try {
    var resourcePath = context.plugin.urlForResourceNamed(webviewResource).path();
    var timestamp = Date.now();
    var url = encodeURI('file://' + resourcePath + '#' + timestamp);

    var frame = NSMakeRect(0, 0, panelSettings.width, panelSettings.height);

    var panel = NSPanel.alloc().init();
    panel.setTitleVisibility(NSWindowTitleHidden);
    panel.setTitlebarAppearsTransparent(true);
    panel.standardWindowButton(NSWindowCloseButton).setHidden(false);
    panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
    panel.standardWindowButton(NSWindowZoomButton).setHidden(true);
    panel.setFrame_display(frame, false);
    panel.setBackgroundColor(panelSettings.backgroundColor);

    var contentView = panel.contentView();
    var webView = WebView.alloc().initWithFrame(NSMakeRect(0, 0, panelSettings.width, panelSettings.height));

    var delegate = new MochaJSDelegate(delegateListeners);

    contentView.setWantsLayer(true);
    contentView.layer().setFrame( contentView.frame() );
    contentView.layer().setCornerRadius(6);
    contentView.layer().setMasksToBounds(true);

    webView.setBackgroundColor(panelSettings.backgroundColor);
    webView.setFrameLoadDelegate_(delegate.getClassInstance());
    webView.setMainFrameURL_(url);

    contentView.addSubview(webView);

    var closeButton = panel.standardWindowButton(NSWindowCloseButton);
    closeButton.setCOSJSTargetFunction(function(sender) {
      panel.orderOut(nil);
      NSApp.stopModal();
    });
    closeButton.setAction("callAction:");

    panel.becomeKeyWindow();
    panel.setLevel(NSFloatingWindowLevel);
    panel.center();
    panel.makeKeyAndOrderFront(nil);
    if (options.floating) {
      panel.orderFront(NSApp.mainWindow());
      return webView;
    } else {
      NSApp.runModalForWindow(panel);
    }
  } catch(e) {
    log(e);
  }
}