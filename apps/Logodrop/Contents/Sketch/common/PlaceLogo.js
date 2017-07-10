function placeLogo(logo, context) {
    var logoUrl = logo.svg_file;
    var selection = context.selection;
    // var selectedShape = [selection objectAtIndex:0];
    var doc = context.document;
    // var selectedFrame = selectedShape.frame();
    var svgImporter = MSSVGImporter.svgImporter();
    
    var fileURL = NSURL.URLWithString(logoUrl);
    svgImporter.prepareToImportFromURL(fileURL);
    var importedSVGLayer = svgImporter.importAsLayer();
    importedSVGLayer.name = logo.name;

    /*
    // Scale SVG to selection frame
    var svgFrame = importedSVGLayer.frame();
    var ratio = svgFrame.width() / svgFrame.height();
    var newWidth = selectedFrame.width();
    var newHeight = newWidth / ratio;
    if (newHeight > selectedFrame.height()) {
        newHeight = selectedFrame.height();
        newWidth = newHeight * ratio;
    }

    // Center in selection frame
    [svgFrame setX:selectedFrame.x() + selectedFrame.width() / 2 - newWidth / 2];
    [svgFrame setY:selectedFrame.y() + selectedFrame.height() / 2 - newHeight / 2];
    [svgFrame setWidth:newWidth];
    [svgFrame setHeight:newHeight];

    */

    // Add label layer
    var page = doc.currentPage();
    var canvas = page.currentArtboard() || page;
    canvas.addLayers([importedSVGLayer]);

    // Remove selection frame
    // selectedShape.removeFromParent();
}