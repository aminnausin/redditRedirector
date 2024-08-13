const targetHostname = "new.reddit.com";

if(window.location.hostname === 'www.reddit.com' && window.location.pathname !== '/media'){
    let x = targetHostname + window.location.pathname;
    window.location.replace("https://" + x);
}