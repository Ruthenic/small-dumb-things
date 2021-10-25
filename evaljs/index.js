//this is meant to be minified and used in a bookmarklet to get around inspect element restrictions, along with an element picker
(async () => {
    window.console = { //replace the console object, because alert is basically the only way to get data out without devtools, and console doesnt normally do that
        log: async (string) => {
            try {
                if (typeof(string) === 'object') { //account for the fact that objects exist. only used in log because the other two are only fallbacks for normal usage
                    alert(JSON.stringify(string))
                } else {
                    alert(string);
                }
            } catch (e) {
                console.error(e.toString())
            }
        },
        error: async (string) => {
            alert("ERROR: " + string);
        },
        warn: async (string) => {
            alert("WARNING: " + string)
        }
    };
    let code = prompt('JS to eval:');
    let func = new Function('a', code); //the blank arg is required according to mdn
    try {
        let res = func('a')
    } catch(e) {
        console.error(e.toString())
    } 
})();