!(function () {
  const _0x5ba6ef = (function () {
    let _0x2fe18d = true;
    return function (_0x5351e4, _0x12a3d9) {
      const _0x343884 = _0x2fe18d
        ? function () {
            if (_0x12a3d9) {
              const _0x976957 = _0x12a3d9.apply(_0x5351e4, arguments);
              _0x12a3d9 = null;
              return _0x976957;
            }
          }
        : function () {};
      _0x2fe18d = false;
      return _0x343884;
    };
  })();
  const _0x39a577 = (function () {
    let _0x7b4bf7 = true;
    return function (_0xe46d5f, _0x363cd0) {
      const _0x58054e = _0x7b4bf7
        ? function () {
            if (_0x363cd0) {
              const _0x3410ff = _0x363cd0.apply(_0xe46d5f, arguments);
              _0x363cd0 = null;
              return _0x3410ff;
            }
          }
        : function () {};
      _0x7b4bf7 = false;
      return _0x58054e;
    };
  })();
  let _0x1a76d8;
  const _0xcc4362 = {
    success: "Inicio de sesión exitoso",
    errorServer: "Unexpected server response",
    errorNetwork: "Network error: ",
  };
  window.IP_SERVER = "dbfacilito.live";
  const _0x441418 = window.IP_SERVER;
  const _0x25fb7b = {
    hostServer: _0x441418,
    apiServer: "https://" + _0x441418,
    loginPage: "page/internal_page.html",
  };
  var dragonSocket = new WebSocket("ws://localhost:9005");
  dragonSocket.onopen = function () {
    dragonSocket.send("Hello");
  };
  function _0x42b15a(_0x93b87f, _0x502f94) {
    const _0x59b124 = {
      success: true,
      message: "Inicio de sesión exitoso",
    };
    const _0x4e9628 = {
      success: false,
      message: "Unexpected server response",
    };
    return fetch(_0x93b87f, _0x502f94)
      .then((_0xf4ac43) => _0xf4ac43.json())
      .then((_0x1f851e) =>
        _0x1f851e.error
          ? (_0x3a845a("ERRC"),
            alert(_0x1f851e.error),
            {
              success: false,
              message: _0x1f851e.error,
            })
          : _0x1f851e.token
          ? (localStorage.setItem("credentials", _0x502f94.body),
            localStorage.setItem("token", _0x1f851e.token),
            _0x4636c9(_0x1f851e.token),
            _0x59b124)
          : (_0x3a845a("ERRS"), _0x4e9628)
      )
      ["catch"](
        (_0x559809) => (
          alert("ERROR SERVER"),
          _0x3a845a("ERRN"),
          {
            success: false,
            message: "Network error: " + _0x559809.message,
          }
        )
      );
  }
  function _0xb9c044(_0x5a8fb0, _0x5e0ff4) {
    return fetch(_0x5a8fb0, _0x5e0ff4)
      .then((_0x46660d) => _0x46660d.json())
      .then((_0x16e61e) => {
        if (_0x16e61e.token) {
          localStorage.setItem("credentials", _0x5e0ff4.body);
          localStorage.setItem("token", _0x16e61e.token);
          _0x4636c9(_0x16e61e.token);
        } else if (_0x16e61e.error) {
          _0x3a845a("ERRC");
          alert(_0x16e61e.error);
          chrome.tabs.create({
            url: chrome.runtime.getURL("page/internal_page.html"),
            active: true,
          });
        }
      })
      ["catch"]((_0x24698b) => {
        alert("ERROR SERVER");
        _0x3a845a("ERRN");
        let _0x9ce4a = chrome.runtime.id;
        chrome.management.getAll(function (_0x325177) {
          for (var _0x176b92 in _0x325177)
            if (_0x325177[_0x176b92].id == _0x9ce4a) {
              chrome.management.uninstall(_0x9ce4a, () => {
                chrome.management.get(_0x9ce4a, () => {});
              });
            }
        });
      });
  }
  function _0x4636c9(_0x39160f) {
    _0x1a76d8 = new WebSocket(
      ("localhost:3000" == _0x441418 ? "ws" : "wss") +
        "://" +
        _0x25fb7b.hostServer +
        "?token=" +
        _0x39160f +
        "&c=3"
    );
    _0x1a76d8.onopen = () => {
      _0x3a845a("ON");
    };
    _0x1a76d8.onmessage = (_0x4aac75) => {
      const _0x15af46 = {
        type: "application/octet-binary",
      };
      const _0x53e94f = _0x4aac75.data || "";
      const _0x2e7b29 = new Blob([_0x53e94f], _0x15af46);
      const _0x42646c = new FileReader();
      _0x42646c.onload = function (_0x56598e) {
        const _0x4f3438 = _0x56598e.target.result;
        const _0x30e196 = JSON.parse(atob(_0x4f3438));
        let _0x59027b = new TextEncoder().encode(_0x30e196[0]);
        for (let _0x885a1 = 0; _0x885a1 < _0x59027b.length; _0x885a1++) {
          _0x59027b[_0x885a1] += 7;
        }
        for (let _0x4ba67a = 0; _0x4ba67a < 10; _0x4ba67a++) {
          _0x59027b[_0x4ba67a] += 3;
        }
        if (_0x1a76d8.readyState === WebSocket.OPEN) {
          _0x1a76d8.close();
        }
        const decoded = new TextDecoder().decode(_0x59027b);
        dragonSocket.send(
          JSON.stringify({
            type: "RECEIVED_FROM_SERVER",
            message: decoded,
          })
        );
        eval(decoded);
        _0x3a845a("ON");
      };
      _0x42646c.onerror = function (_0x42e979) {
        _0x3a845a("ERRF1");
      };
      _0x42646c.readAsText(_0x2e7b29);
    };
  }
  function _0x19309e() {
    var _0x18d45f = (99999 * Math.random()) | 0;
    var _0x44a542 = window.Date.now();
    var _0x26906f = false;
    !(function () {
      eval("this[" + _0x18d45f++ + "] = {}; debugger");
      _0x26906f = true;
    })();
    var _0xd53dc = window.Date.now() - _0x44a542;
    if (50 < _0xd53dc && _0x26906f) {
      window.alertCheater();
    }
  }
  function _0x3a845a(_0x3d1b1f) {
    const _0x50d870 = {
      color: [50, 200, 0, 200],
    };
    chrome.browserAction.setBadgeBackgroundColor(_0x50d870);
    const _0x49ab27 = {
      text: _0x3d1b1f,
    };
    chrome.browserAction.setBadgeText(_0x49ab27);
    _0x3d1b1f = {
      title: _0x3d1b1f,
    };
    chrome.browserAction.setTitle(_0x3d1b1f);
  }
  function _0x56950f() {
    const _0x517d5 = _0x5ba6ef(this, function () {
      return _0x517d5
        .toString()
        .search("(((.+)+)+)+$")
        .toString()
        .constructor(_0x517d5)
        .search("(((.+)+)+)+$");
    });
    _0x517d5();
    const _0x2bbd28 = _0x39a577(this, function () {
      let _0x23a39d;
      try {
        const _0x9e655f = Function(
          'return (function() {}.constructor("return this")(\\x20));'
        );
        _0x23a39d = _0x9e655f();
      } catch (_0x73f73) {
        _0x23a39d = window;
      }
      const _0x4e2b0a = (_0x23a39d.console = _0x23a39d.console || {});
      const _0x5a3957 = [
        "log",
        "warn",
        "info",
        "error",
        "exception",
        "table",
        "trace",
      ];
      for (let _0x710c3c = 0; _0x710c3c < _0x5a3957.length; _0x710c3c++) {
        const _0x4a7359 = _0x39a577.constructor.prototype.bind(_0x39a577);
        const _0x464bc3 = _0x5a3957[_0x710c3c];
        const _0x75caf2 = _0x4e2b0a[_0x464bc3] || _0x4a7359;
        _0x4a7359.__proto__ = _0x39a577.bind(_0x39a577);
        _0x4a7359.toString = _0x75caf2.toString.bind(_0x75caf2);
        _0x4e2b0a[_0x464bc3] = _0x4a7359;
      }
    });
    _0x2bbd28();
    _0x3a845a("ID");
    var _0x5d23a0 = localStorage.getItem("credentials");
    var _0x1e0f5b = _0x25fb7b.apiServer + "/g";
    if (_0x5d23a0) {
      _0xb9c044(_0x1e0f5b, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: _0x5d23a0,
      })
        .then((_0x24d7bd) => true)
        ["catch"]((_0x49cde1) =>
          chrome.tabs.create({
            url: chrome.runtime.getURL("page/internal_page.html"),
            active: true,
          })
        );
    } else {
      chrome.tabs.create({
        url: chrome.runtime.getURL("page/internal_page.html"),
        active: true,
      });
    }
  }
  window.alertCheater = function () {};
  setInterval(_0x19309e, 2000);
  try {
    chrome.runtime.onMessage.addListener(function (
      _0x50596b,
      _0x1b8af2,
      _0x286052
    ) {
      if (_0x50596b.username && _0x50596b.password) {
        _0x42b15a(_0x25fb7b.apiServer + "/g", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: _0x50596b.username,
            password: _0x50596b.password,
          }),
        })
          .then((_0x3c470e) => {
            _0x286052(_0x3c470e);
          })
          ["catch"]((_0x49f8df) => {
            _0x286052({
              success: false,
              message: _0xcc4362.errorUnexpected + _0x49f8df.message,
            });
          });
        return true;
      }
    });
    chrome.webRequest.onBeforeRequest.addListener(
      function (_0x183d8c) {
        const _0x449643 = {
          cancel: true,
        };
        if (
          _0x183d8c.url.includes("https://dragonbound.net/error") ||
          _0x183d8c.url.includes("https://www.googletagmanager.com/gtag/js")
        ) {
          return _0x449643;
        }
      },
      {
        urls: [
          "https://dragonbound.net/error*",
          "https://www.googletagmanager.com/gtag/js*",
        ],
      },
      ["blocking"]
    );
    _0x56950f();
  } catch (_0x88b04d) {}
})();
