@import 'common/MochaJSDelegate.js';
@import 'common/Panel.js';
@import 'common/PlaceLogo.js';
@import 'common/SelectedShape.js';

function searchLogos(context) {
  var webviewResource = 'index.html';
  var panelSettings = {
    width: 395,
    height: 560,
    backgroundColor: NSColor.whiteColor()
  };

  var delegateListeners = {
    "webView:didChangeLocationWithinPageForFrame:": function(webView, webFrame) {
      var panel = webView.superview().window();
      var windowObject = webView.windowScriptObject();
      var request = NSURL.URLWithString(webView.mainFrameURL()).fragment();

      var data = windowObject.valueForKey("data");

      var logo = JSON.parse(data);

      placeLogo(logo, context);

      log(data);
    }
  }

  showPanel({
    context: context,
    webviewResource: webviewResource,
    panelSettings: panelSettings,
    delegateListeners: delegateListeners
  });
}