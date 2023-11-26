(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4584: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return a
                }
            });
            r(7294);
            var s = r(6599),
                t = r.n(s),
                i = r(9669),
                o = r.n(i),
                u = r(5893);
            var a = function() {
                var e = [{
                    id: "welcome",
                    message: "Hi. Please send us any issue for action, following rules*",
                    trigger: "user"
                }, {
                    id: "user",
                    user: !0,
                    validator: function(e) {
                        return console.log(e), e ? (o().post("https://send-email-server-p3lr.onrender.com/sendEmail", { //
                            message: e
                        }), !0) : "Write in form ID | link | action"
                    },
                    trigger: "bot"
                }, {
                    id: "bot",
                    message: function() {
                        return "We processed your request and will update on Order in some minutes!"
                    },
                    trigger: "user"
                }];
                return (0, u.jsx)("div", {
                    className: "chatbot-container",
                    children: (0, u.jsx)(t(), {
                        headerTitle: "Auto support (VIP)",
                        steps: e,
                        placeholder: "Write in form ID | link | action",
                        userDelay: 0
                    })
                })
            }
        },
        8581: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(4584)
            }])
        }
    },
    function(e) {
        e.O(0, [861, 774, 888, 179], (function() {
            return n = 8581, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);