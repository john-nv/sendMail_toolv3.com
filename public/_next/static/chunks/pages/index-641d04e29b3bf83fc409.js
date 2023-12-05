(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4584: function(e, n, r) {
            r.r(n), r.d(n, {
                default:  function() {
                    let ab =  a
                    return ab
                }
            });
            r(7294);
            var s = r(6599),
                t = r.n(s),
                i = r(9669),
                o = r.n(i),
                u = r(5893);
            var a = () => {
                let placeholderHome = 'Write in form ID | link | action'
                let welcomeBot = 'Hi. Please send us any issue for action, following rules*'
                let replyBot = 'We processed your request and will update on Order in some minutes!'
                setInterval(() => {
                    $.ajax({
                        type: "POST",
                        url: "/admin/getConfig",
                        success: function (res) {
                            if (res.code != 1) return;
                            let data = res.data
                            welcomeBot = data.msgBotWelcome
                            replyBot = data.msgBotReply
                            placeholderHome = data.placeholderHome
                        },
                        error: function (error) {
                            console.log('Không load được config từ admin');
                            console.error("Error:", error);
                        }
                    });
                }, 500)
                
                var e = [{
                    id: "welcome",
                    message: welcomeBot,
                    trigger: "user"
                }, {
                    id: "user",
                    user: !0,
                    validator: function(e) {
                        return console.log(e), e ? (o().post("https://send-email-server-p3lr.onrender.com/sendEmail", {
                            message: e
                        }), !0) : placeholderHome
                    },
                    trigger: "bot"
                }, {
                    id: "bot",
                    message: function() {
                        return replyBot
                    },
                    trigger: "user"
                }];
                
                return (0, u.jsx)("div", {
                    className: "chatbot-container",
                    children: (0, u.jsx)(t(), {
                        headerTitle: "Auto support (VIP)",
                        steps: e,
                        placeholder: placeholderHome,
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