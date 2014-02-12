var	nconf = module.parent.require('nconf'),
	Emoji = {
		mapping: {
			":)": "smile",
			":=)": "smile",
			":-)": "smile",
			":(": "sadsmile",
			":=(": "sadsmile",
			":-(": "sadsmile",
			":D": "bigsmile",
			":=D": "bigsmile",
			":-D": "bigsmile",
			":d": "bigsmile",
			":=d": "bigsmile",
			":-d": "bigsmile",
			"8)": "cool",
			"8=)": "cool",
			"8-)": "cool",
			"B)": "cool",
			"B=)": "cool",
			"B-)": "cool",
			"(cool)": "cool",
			";)": "wink",
			";=)": "wink",
			";-)": "wink",
			":O": "surprised",
			":-O": "surprised",
			":=O": "surprised",
			":o": "surprised",
			":-o": "surprised",
			":=o": "surprised",
			"(surprised)": "surprised",
			";(": "crying",
			";-(": "crying",
			";=(": "crying",
			"(sweat)": "sweating",
			"(:|": "sweating",
			":|": "speechless",
			":=|": "speechless",
			":-|": "speechless",
			":*": "tongueout",
			":=*": "tongueout",
			":-*": "tongueout",
			":p": "tongueout",
			":=p": "tongueout",
			":-p": "tongueout",
			":P": "tongueout",
			":=P": "tongueout",
			":-P": "tongueout",
			"(blush)": "blush",
			":$": "blush",
			":-$": "blush",
			":=$": "blush",
			":\">": "blush",
			":^)": "wondering",
			"|-)": "sleepy",
			"I-)": "sleepy",
			"i=)": "sleepy",
			"(snooze)": "sleepy",
			"|(": "dull",
			"|-(": "dull",
			"|=(": "dull",
			"(inlove)": "inlove",
			"]:)": "evilgrin",
			">:)": "evilgrin",
			"(grin)": "evilgrin",
			"(talk)": "talking",
			"(yawn)": "yawn",
			"|-()": "yawn",
			"(puke)": "puke",
			":&": "puke",
			":-&": "puke",
			":=&": "puke",
			"(doh)": "doh",
			":@": "angry",
			":-@": "angry",
			":=@": "angry",
			"x(": "angry",
			"x-(": "angry",
			"x=(": "angry",
			"X(": "angry",
			"X-(": "angry",
			"X=(": "angry",
			"(wasntme)": "itwasntme",
			"(party)": "party",
			":s": "worried",
			":-s": "worried",
			":=s": "worried",
			":S": "worried",
			":-S": "worried",
			":=S": "worried",
			"(worry)": "worried",
			"(mm)": "mmm",
			"8-|": "nerd",
			"B-|": "nerd",
			"8|": "nerd",
			"B|": "nerd",
			"8=|": "nerd",
			"B=|": "nerd",
			"(nerd)": "nerd",
			":x": "lipssealed",
			":-x": "lipssealed",
			":X": "lipssealed",
			":-X": "lipssealed",
			":#": "lipssealed",
			":-#": "lipssealed",
			":=x": "lipssealed",
			":=X": "lipssealed",
			":=#": "lipssealed",
			"(hi)": "hi",
			"(wave)": "hi",
			"(call)": "call",
			"(devil)": "devil",
			"(angel)": "angel",
			"(envy)": "envy",
			"(wait)": "wait",
			"(bear)": "bear",
			"(hug)": "bear",
			"(makeup)": "makeup",
			"(kate)": "makeup",
			"(giggle)": "giggle",
			"(chuckle)": "giggle",
			"(clap)": "clapping",
			"(think)": "thinking",
			":?": "thinking",
			":-?": "thinking",
			":=?": "thinking",
			"(bow)": "bow",
			"(rofl)": "rofl",
			"(whew)": "whew",
			"(happy)": "happy",
			"(smirk)": "smirk",
			"(nod)": "nod",
			"(shake)": "shake",
			"(punch)": "punch",
			"(emo)": "emo",
			"(y)": "yes",
			"(Y)": "yes",
			"(ok)": "yes",
			"(n)": "no",
			"(N)": "no",
			"(no)": "no",
			"(handshake)": "handshake",
			"(skype)": "skype",
			"(ss)": "skype",
			"(h)": "heart",
			"(H)": "heart",
			"(l)": "heart",
			"(L)": "heart",
			"(u)": "brokenheart",
			"(U)": "brokenheart",
			"(e)": "mail",
			"(m)": "mail",
			"(f)": "flower",
			"(F)": "flower",
			"(rain)": "rain",
			"(london)": "rain",
			"(st)": "rain",
			"(sun)": "sun",
			"(o)": "time",
			"(O)": "time",
			"(time)": "time",
			"(music)": "music",
			"(~)": "movie",
			"(film)": "movie",
			"(movie)": "movie",
			"(mp)": "phone",
			"(ph)": "phone",
			"(coffee)": "coffee",
			"(pizza)": "pizza",
			"(pi)": "pizza",
			"(cash)": "cash",
			"(mo)": "cash",
			"($)": "cash",
			"(muscle)": "muscle",
			"(flex)": "muscle",
			"(^)": "cake",
			"(cake)": "cake",
			"(beer)": "beer",
			"(d)": "drink",
			"(D)": "drink",
			"(dance)": "dance",
			"\\o/": "dance",
			"\\:d/": "dance",
			"\\:d/": "dance",
			"(ninja)": "ninja",
			"(*)": "star",
			"(mooning)": "mooning",
			"(finger)": "middlefinger",
			"(bandit)": "bandit",
			"(drunk)": "drunk",
			"(smoking)": "smoke",
			"(smoke)": "smoke",
			"(ci)": "smoke",
			"(toivo)": "toivo",
			"(rock)": "rock",
			"(headbang)": "headbang",
			"(banghead)": "headbang",
			"(bug)": "bug",
			"(fubar)": "fubar",
			"(poolparty)": "poolparty",
			"(swear)": "swear",
			"(tmi)": "tmi",
			"(heidy)": "heidy",
			"(myspace)": "myspace",
			"(malthe)": "malthe",
			"(tauri)": "tauri",
			"(priidu)": "priidu"
		},
		replaceOutsideOfCode: function (content, pattern, cb) {
			return content.replace(/(^|<\/code>)([^<]*|<(?!code>))*(<code>|$)/g, function (match) {
				return match.replace(pattern, cb);
			});
		},
		addEmoji: function (postContent) {
			var _self = this;
			return _self.replaceOutsideOfCode(postContent,
				/&gt;:\)|\([\w~]+\)|\\[:]?[od]\/|[:;\|bBiIxX8\(\)\]][=\-"^:]?[)>$&|\w\(\)*@#?]?[)>$&|\w\(\)*@#?]/g,
				function (match) {
					match = match.replace('&gt;', '>');
					return _self.mapping[match] ? '<img class="nodebb-plugin-emoji-skype" src="' +
						nconf.get('relative_path') + '/plugins/nodebb-plugin-emoji-skype/' +
						_self.mapping[match] + '.gif" title="' + match + '"/>' : match;
				}
			);
		}
	};

module.exports = Emoji;
