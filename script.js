function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
if (document.getElementById("extra_bottomads")) {
    document.getElementById("extra_bottomads").innerHTML = '<script async="async" data-cfasync="false" src="//contentmentchef.com/96314fa952985a5aa0baad800dcf033b/invoke.js"></script><div id="container-96314fa952985a5aa0baad800dcf033b"></div>';
}
(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//contentmentchef.com/6c/5e/64/6c5e64b2c030e229293b29acdaa24af6.js';
    document.body.appendChild(script);
})();
async function relCall() {
    var script, el;
    await sleep(1000);
    if (document.getElementById("top_720")) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.text =
            "atOptions = {'key' : '4448d3462258df19b0d84d74be83dca5','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
        el = document.getElementById("top_720");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://contentmentchef.com/4448d3462258df19b0d84d74be83dca5/invoke.js';
        el = document.getElementById("top_720");
        el.appendChild(script);
    }
    await sleep(3000);
    if (document.getElementById("sidebar_300")) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.text =
            "atOptions = {'key' : '60cda9033ca3d00b1edbba3291757c5c','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
        el = document.getElementById("sidebar_300");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://contentmentchef.com/60cda9033ca3d00b1edbba3291757c5c/invoke.js';
        el = document.getElementById("sidebar_300");
        el.appendChild(script);
    }
    await sleep(3000);
    if (document.getElementById("in_post_bottomads")) {
        script = document.createElement('center');
        script.id = 'a458d2acc';
        el = document.getElementById("in_post_bottomads");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.text =
            "atOptions = {'key' : '73fcc3423b49b61aff9423877cadd7cf','format' : 'iframe','height' : 60,'width' : 468,'params' : {} 	};";
        el = document.getElementById("a458d2acc");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://contentmentchef.com/73fcc3423b49b61aff9423877cadd7cf/invoke.js';
        el = document.getElementById("a458d2acc");
        el.appendChild(script);
    }
}
relCall();