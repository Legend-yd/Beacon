function setCss(lujing) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = lujing;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.append(link);
}
function setJs( lujing) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = lujing;
    script.type = 'text/javascript';
    head.append(script);
}

