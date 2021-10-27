//this is meant to be minified and used in a bookmarklet to get around inspect element restrictions, along with an element picker
(async () => {
    window.console = { //replace the console object, because alert is basically the only way to get data out without devtools, and console doesnt normally do that
        log: async (string) => {
            try {
                if (typeof(string) === 'object') { //account for the fact that objects exist. only used in log because the other two are only fallbacks for normal usage
                    console._log(JSON.stringify(string))
                } else {
                    console._log(string);
                }
            } catch (e) {
                console.error(e.toString())
            }
        },
        error: async (string) => {
            console._log("ERROR: " + string);
        },
        warn: async (string) => {
            console._log("WARNING: " + string)
        },
        _log: async (string) => {
            alert(string)
        }
    }; //TODO: use a proxy
    let code = prompt('JS to eval:');
    let i = 2
    while (code === "") {
        console.log("No code passed!")
        if (i !== 69) {
            code = prompt(`JS to eval (take ${i.toString()})`)
        } else {
            code = prompt(`Put le nice JS here (because 69):`)
        }
        i++;
    }
    let func = new Function('a', code); //the blank arg is required according to mdn
    try {
        let res = func('a')
        console.log(res)
        return res //i don't wanna know why you'd wanna use this value but return it anyways
    } catch(e) {
        console.error(e.toString())
    } 
})();