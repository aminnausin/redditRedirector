const targetHostname = "new.reddit.com";
if(window.location.hostname === 'www.reddit.com'){
    let x = targetHostname + window.location.pathname;
    window.location.replace("https://" + x);
}