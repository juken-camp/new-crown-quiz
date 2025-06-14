// NEW CROWN Quiz 用問題データベース
// このファイルでは以下のキー構造を使用します：
// - grade1_lesson1_part1_scene1
// - grade1_lesson1_part1_scene2
// - grade1_lesson1_part2_scene1
// etc.

const problemDatabase = {
    // 中学1年生 Lesson1 Part1 Scene1
    grade1_lesson1_part1_scene1: [
        {
            q: "私は加藤リクです。",
            ans: "I am Kato Riku.",
            exp: "この文は英語の基本中の基本、be動詞「am」を使った自己紹介の文です。「I am」は「私は〜です」という意味で、主語が「I（私）」の時は必ず「am」を使います。日本語では「私は加藤リクです」と言いますが、英語では「I am Kato Riku」と語順が違うことに注目しましょう。"
        },
        {
            q: "私は音楽が好きです。",
            ans: "I like music.",
            exp: "今度は一般動詞「like」を使った文です。「like」は「〜が好き」という意味で、主語が「I」の時はそのまま「like」を使います。日本語では「私は音楽が好きです」ですが、英語では「I like music」と、やはり語順が異なります。この語順の違いが英語学習の最初の壁ですが、慣れれば自然に感じられるようになりますよ。"
        }
    ],

    // 中学1年生 Lesson1 Part1 Scene2
    grade1_lesson1_part1_scene2: [
        {
            q: "こんにちは。私は田中ハナです。",
            ans: "Hi. I am Tanaka Hana.",
            exp: "「Hi」は気軽な挨拶で「こんにちは」という意味です。友達同士や親しい間柄でよく使われます。「I am Tanaka Hana」は先ほどと同じbe動詞を使った自己紹介で、日本では「田中ハナ」と姓・名の順で言いますが、英語圏では「Hana Tanaka」と名・姓の順で言うことが多いです。"
        },
        {
            q: "私はスポーツと英語が好きです。",
            ans: "I like sports and English.",
            exp: "「and」は「〜と」という意味で、二つ以上のものを並べる時に使います。「sports」は「スポーツ」、「English」は「英語」という意味です。一つの文で複数の好きなものを表現できるので、とても便利な表現ですね。日本語でも「私はスポーツと英語が好きです」と自然に言えるように、英語でも同じ感覚で使えます。"
        },
        {
            q: "私はサッカーをします。",
            ans: "I play soccer.",
            exp: "「play」は「〜をする」「〜をプレイする」という意味の一般動詞です。スポーツや楽器、ゲームなどに使います。「soccer」はアメリカ英語で「サッカー」のことで、イギリス英語では「football」と言います。「I play soccer」で「私はサッカーをします」という現在の習慣や趣味を表現しています。"
        },
        {
            q: "私はよくテレビでサッカーの試合を見ます。",
            ans: "I often watch soccer games on TV.",
            exp: "「often」は「よく」「しばしば」という意味の頻度を表す副詞です。一般動詞の前に置くのが基本的な位置です。「watch」は「見る」、「games」は「試合」（複数形）、「on TV」は「テレビで」という意味です。この文は現在の習慣を表しており、「よくサッカーの試合をテレビで見る」という日常的な行動を表現しています。"
        },
        {
            q: "私は英語が得意です。",
            ans: "I am good at English.",
            exp: "「be good at」は「〜が得意である」という熟語表現です。「at」の後には得意なことを表す名詞や動名詞（-ing形）が来ます。ここでは「English」という名詞が来ています。日本語では「英語が得意です」と言いますが、英語では「I am good at English」と表現することで、自分の能力や特技を相手に伝えることができます。"
        },
        {
            q: "私は時々英語で本を読みます。",
            ans: "I sometimes read books in English.",
            exp: "「sometimes」は「時々」という意味の頻度を表す副詞で、「often」よりも頻度が低いことを表します。「read」は「読む」という意味の一般動詞で、現在形と過去形が同じ「read」という特殊な動詞です。「in English」は「英語で」という意味で、使用言語を表す時に使います。英語学習の実践的な方法を表現した素晴らしい文ですね。"
        },
        {
            q: "はじめまして。",
            ans: "Nice to meet you.",
            exp: "これは初対面の人に対する定型的な挨拶表現です。直訳すると「あなたに会えて嬉しいです」となりますが、日本語では「はじめまして」「よろしくお願いします」と訳されることが多いです。自己紹介の最後に使うことで、相手に好印象を与えることができる大切な表現です。"
        }
    ],

    // 中学1年生 Lesson1 Part2 Scene1
    grade1_lesson1_part2_scene1: [
        {
            q: "あなたはバスケットボールファンですか？ — はい、そうです。/ いいえ、違います。",
            ans: "Are you a basketball fan? — Yes, I am. / No, I am not.",
            exp: "be動詞「are」を使った疑問文は、平叙文「You are a basketball fan.」の語順を変えて、be動詞を文頭に持ってくることで疑問文を作ることができます。be動詞の疑問文に対する答え方は、肯定の場合は「Yes, I am.」、否定の場合は「No, I am not.」と答えます。「I am not」は「I'm not」と短縮することもできます。"
        },
        {
            q: "あなたは毎日サッカーの練習をしますか？ — はい、します。/ いいえ、しません。",
            ans: "Do you practice soccer every day? — Yes, I do. / No, I do not.",
            exp: "一般動詞「practice」を使った疑問文は「Do」を文頭に置いて作ります。一般動詞の疑問文に対する答え方は、肯定の場合は「Yes, I do.」、否定の場合は「No, I do not.」と答えます。「do not」は「don't」と短縮することが多いです。be動詞の答え方とは異なり、一般動詞の場合は「do」を使って答えることに注意しましょう。"
        },
        {
            q: "私はバスケットボールファンではありません。",
            ans: "I am not a basketball fan.",
            exp: "be動詞の否定文です。be動詞の後に「not」を置くことで否定文を作ります。「I am not」は「I'm not」と短縮できます。この文は自分がバスケットボールファンではないことを明確に表現しており、自分の興味や好みを相手に伝える時に使える表現です。"
        },
        {
            q: "私は毎日サッカーの練習をしません。",
            ans: "I do not practice soccer every day.",
            exp: "一般動詞の否定文です。動詞の前に「do not」を置くことで否定文を作ります。「do not」は「don't」と短縮することが多いです。この文は毎日の習慣を否定する表現で、自分の生活パターンを相手に説明する時に使えます。日本語の語順とは異なることに注意しましょう。"
        }
    ],

    // 中学1年生 Lesson1 Part2 Scene2
    grade1_lesson1_part2_scene2: [
        {
            q: "あなたは学校でクラブに入っていますか？ - いいえ、入っていません。",
            ans: "Are you in a club at school? - No, I'm not.",
            exp: "「be in a club」は「クラブに所属している」「クラブに入っている」という意味の表現です。「at school」は「学校で」という意味で、場所を表す前置詞「at」を使います。「No, I'm not.」はbe動詞の疑問文に対する否定の答えです。"
        },
        {
            q: "私は放課後にダンスレッスンを受けています。",
            ans: "I take dance lessons after school.",
            exp: "「I take dance lessons」の「take lessons」は「レッスンを受ける」という意味の熟語表現です。「after school」は「放課後に」という意味で、時を表す表現です。学校のクラブには入っていないが、別の場所で習い事をしているという状況を表現しています。"
        },
        {
            q: "わあ。私もダンスをします！",
            ans: "Wow. I dance, too!",
            exp: "「Wow」は驚きや感動を表す感嘆詞です。「I dance, too!」の「too」は「〜も」という意味で、共通点があることを表現しています。"
        },
        {
            q: "あなたはヒップホップが好きですか？ - はい、好きです。",
            ans: "Do you like hip-hop? - Yes, I do.",
            exp: "「Do you like hip-hop?」は一般動詞「like」を使った疑問文で、相手の好みを尋ねています。「Yes, I do.」は一般動詞の疑問文に対する肯定の答えです。"
        },
        {
            q: "あなたはヒップホップダンサーですか？ - はい、そうです。",
            ans: "Jing: Are you a hip-hop dancer?" - Mr. Oka: Yes, I am.,
            exp: "「Are you a hip-hop dancer?」はbe動詞を使った疑問文で、相手の職業や身分について尋ねています。「Yes, I am.」はbe動詞の疑問文に対する肯定の答えです。"
        },
        {
            q: "私は日曜日に練習しています。",
            ans: "Mr. Oka: I practice on Sundays.",
            exp: "「I practice on Sundays.」の「on Sundays」は「日曜日に」という意味で、曜日の前には前置詞「on」を使います。「Sundays」と複数形になっているのは、「毎週日曜日に」という習慣的な行動を表現しているからです。"
        }
    ],

    // 中学1年生 Lesson1 Part3 Scene1
    grade1_lesson1_part3_scene1: [
        {
            q: "あなたは週末に何をしますか？",
            ans: "What do you do on weekends?",
            exp: "これは疑問詞「What」を使った疑問文です。「What do you do」は「あなたは何をしますか」という意味で、相手の行動や活動について尋ねる基本的な表現です。「on weekends」は「週末に」という意味で、「weekends」と複数形になっているのは毎週の週末という習慣的な意味を表しています。"
        },
        {
            q: "私はよく家で映画を見ます。",
            ans: "I often watch movies at home.",
            exp: "「often」は「よく」「しばしば」という頻度を表す副詞です。「watch movies」は「映画を見る」という意味で、「movies」は複数形になっています。「at home」は「家で」という意味の場所を表す表現です。週末の過ごし方として、家でリラックスして映画を楽しむという日常的な活動を表現しています。"
        },
        {
            q: "あなたはどんな音楽が好きですか？",
            ans: "What music do you like?",
            exp: "「What music」は「どんな音楽」という意味で、音楽のジャンルや種類について尋ねる表現です。「What」は疑問詞として使われ、具体的な種類や内容を知りたい時に使います。相手の音楽の好みを知るための自然な質問で、会話のきっかけとしてもよく使われます。"
        },
        {
            q: "私はJ-popが好きです。",
            ans: "I like J-pop.",
            exp: "「J-pop」は「Japanese pop music」の略で、日本のポップスのことです。この答えは簡潔で分かりやすく、自分の音楽の好みを相手に伝えています。「I like」の後に具体的なジャンル名を入れることで、自分の趣味嗜好を明確に表現できます。"
        }
    ],

    // 中学1年生 Lesson1 Part3 Scene2
    grade1_lesson1_part3_scene2: [
        {
            q: "あなたは放課後に何をしますか？",
            ans: "What do you do after school?",
            exp: "「What do you do after school?」は放課後の活動について尋ねる質問です。「after school」は「放課後に」という意味で、学生にとって身近な時間帯を表しています。友達同士で日常的な活動について話し合う自然な会話の始まりで、相手の生活パターンや趣味を知るためのきっかけとなる質問です。"
        },
        {
            q: "私はよく動物の写真を撮ります。",
            ans: "Kate: I often take pictures of animals.",
            exp: "「take pictures」は「写真を撮る」という意味の熟語表現です。「of animals」は「動物の」という意味で、撮影対象を表しています。「often」は頻度を表す副詞で、習慣的な行動であることを示しています。写真撮影という創造的な趣味を表現した文で、相手に自分の興味を伝える良い例です。"
        },
        {
            q: "あぁ、本当ですか？あなたはどんな動物が好きですか？",
            ans: "Dinu: Oh, really? What animals do you like?",
            exp: "「Oh, really?」は相手の話に対する驚きや関心を表す表現です。「really」は「本当に」という意味で、相手の話に興味を示しています。「What animals do you like?」は具体的にどんな動物が好きなのかを尋ねる質問で、会話をより深く発展させるための自然な流れです。"
        },
        {
            q: "私はイグアナが好きです。私のペットのイグアナの写真を見てください。",
            ans: "Kate: I like iguanas. Look at this picture of my pet iguana.",
            exp: "「iguanas」は「イグアナ」という爬虫類の名前です。「Look at」は「〜を見て」という意味の命令文で、相手の注意を引く時に使います。「this picture of my pet iguana」は「私のペットのイグアナの写真」という意味で、「of」は所有や関係を表す前置詞です。珍しいペットを飼っていることを紹介する場面ですね。"
        },
        {
            q: "わあ、あなたはイグアナを飼っているんですね！かわいい！",
            ans: "Dinu: Wow, you have an iguana! Cute!",
            exp: "「Wow」は驚きを表す感嘆詞です。「you have an iguana」は「あなたはイグアナを飼っている」という意味で、「have」は「持っている」「飼っている」という意味で使われています。「Cute!」は「かわいい！」という意味の形容詞で、感情を表現する際によく使われます。友達のペットに対する自然な反応を表現しています。"
        }
    ],

    // 中学1年生 Lesson2 Part1 Scene1
    grade1_lesson2_part1_scene1: [
        {
            q: "私はサクラが好きです。彼女はスケートボードがとても上手です。",
            ans: "I like Sakura. She can skateboard very well.",
            exp: "「I like Sakura」は人に対する好意を表現する文です。「She can skateboard very well」の「can」は能力を表す助動詞で「〜できる」という意味です。「skateboard」は動詞として「スケートボードをする」、「very well」は「とても上手に」という意味の副詞句です。人の特技や能力を褒める時に使える表現ですね。"
        },
        {
            q: "私はソウタが好きです。彼は将棋がとても上手です。",
            ans: "I like Sota. He can play shogi very well.",
            exp: "この文も同じ構造で、今度は「shogi（将棋）」という日本の伝統的なゲームについて言及しています。「play shogi」は「将棋をする」という意味で、「play」は楽器やスポーツ、ゲームに広く使われる動詞です。「very well」で高い技能レベルを表現しており、相手の能力を認めて褒める表現として使えます。"
        }
    ],

    // 中学1年生 Lesson2 Part1 Scene2
    grade1_lesson2_part1_scene2: [
        {
            q: "私のヒーローはあいみょんです。",
            ans: "My hero is Aimyon.",
            exp: "「hero」は「英雄」「ヒーロー」という意味ですが、ここでは「憧れの人」「尊敬する人」という意味で使われています。女性に対しても「hero」を使うことがあり、「heroine」という言葉もありますが、現代では「hero」が一般的です。「Aimyon」は日本の人気シンガーソングライターの名前で、自分が尊敬する人を紹介する表現です。"
        },
        {
            q: "彼女は日本で人気の歌手です。",
            ans: "She is a popular singer in Japan.",
            exp: "「popular」は「人気の」「評判の良い」という意味の形容詞です。「singer」は「歌手」という意味で、「in Japan」は「日本で」という場所を表す表現です。この文は相手にその人がどんな人なのかを説明する役割を果たしており、自分のヒーローについて客観的な情報を提供しています。"
        },
        {
            q: "彼女はギターを上手に弾くことができます。",
            ans: "She can play the guitar well.",
            exp: "「can play the guitar」は「ギターを弾くことができる」という意味で、楽器の演奏能力を表現しています。楽器名の前には定冠詞「the」を付けるのが一般的です。「well」は「上手に」という意味の副詞で、技能のレベルを表現しています。音楽的な才能について語る時によく使われる表現です。"
        },
        {
            q: "私は彼女の力強い声が好きです。",
            ans: "I like her powerful voice.",
            exp: "「powerful」は「力強い」「パワフルな」という意味の形容詞で、「voice」は「声」という意味です。「her powerful voice」で「彼女の力強い声」となります。歌手の特徴や魅力を表現する時によく使われる表現で、音楽に対する個人的な感想や好みを伝えることができます。"
        },
        {
            q: "私の好きな曲は「春の日」です。",
            ans: "My favorite song is \"Harunohi.\"",
            exp: "「favorite」は「お気に入りの」「好きな」という意味の形容詞です。「My favorite song」で「私の好きな曲」という意味になります。「Harunohi」は曲名で、引用符で囲まれています。自分の音楽的な好みを具体的に表現する時に使える表現で、会話を具体的に発展させることができます。"
        },
        {
            q: "それは愛についての歌です。",
            ans: "It is a song about love.",
            exp: "「about」は「〜について」という意味の前置詞で、話題や内容を表す時に使います。「a song about love」で「愛についての歌」という意味になります。楽曲のテーマや内容を説明する時に使える表現で、相手にその曲がどんな内容なのかを伝えることができます。"
        },
        {
            q: "その歌を聞いてください。",
            ans: "Please listen to the song.",
            exp: "「Please」は丁寧な依頼を表す言葉で、命令文を柔らかくする効果があります。「listen to」は「〜を聞く」という意味の熟語で、音楽や話などを注意深く聞く時に使います。相手に自分の好きな音楽を勧める時の自然な表現で、共有したい気持ちを表現しています。"
        }
    ],

    // 中学1年生 Lesson2 Part2 Scene1
    grade1_lesson2_part2_scene1: [
        {
            q: "あなたはギターを弾くことができますか？ — はい、できます。/ いいえ、できません。",
            ans: "Can you play the guitar? — Yes, I can. / No, I cannot.",
            exp: "助動詞「can」を使った疑問文は、「can」を文頭に置くことで疑問文を作ります。「play the guitar」は「ギターを弾く」という意味で、楽器名の前には定冠詞「the」を付けます。「can」の疑問文に対する答え方は、肯定の場合は「Yes, I can.」、否定の場合は「No, I cannot.」と答えます。「cannot」は「can't」と短縮することが多いです。"
        },
        {
            q: "私はギターを弾くことができません。",
            ans: "I cannot play the guitar.",
            exp: "「cannot」は「can」の否定形で、「〜できない」という意味です。「can not」と分けて書くこともありますが、「cannot」と一語で書くのが一般的です。自分にできないことを正直に表現する時に使う文で、謙虚さを示すこともできます。"
        }
    ],

    // 中学1年生 Lesson2 Part2 Scene2
    grade1_lesson2_part2_scene2: [
        {
            q: "あなたは将棋ができますか？ - いいえ、できません。",
            ans: "Can you play shogi? - No, I can't.",
            exp: "「Can you play shogi?」は将棋をする能力について尋ねる質問です。「shogi」は日本の伝統的なボードゲームで、海外でも「shogi」として知られています。「No, I can't」は「cannot」の短縮形を使った否定の答えです。"
        },
        {
            q: "私にそれを教えてくれませんか？ - もちろんです。",
            ans: "Can you teach it to me? - Sure.",
            exp: "「Can you teach it to me?」は「私にそれを教えてくれませんか？」という依頼の表現です。「teach」は「教える」、「it」は「shogi」を指し、「to me」は「私に」という意味です。「Sure」は「もちろん」「確かに」という意味で、相手の依頼を快く引き受ける時に使います。"
        },
        {
            q: "（あなたは）将棋では多くの駒を使います。",
            ans: "You use many pieces in shogi.",
            exp: "「You use many pieces」は「あなたは多くの駒を使います」という意味で、将棋のルールを説明し始めています。「pieces」は将棋の「駒」という意味で、ゲームの基本要素を表現しています。"
        },
        {
            q: "この駒の漢字を読むことができますか？ - いいえ、読むことができません。",
            ans: "Can you read the kanji on this piece? - No, I can't read it.",
            exp: "「read」は「読む」という意味の動詞で、「kanji」は「漢字」という日本語から来た英単語です。「on this piece」は「この駒の上の」という意味で、場所を表しています。「can't read it」の「it」は前文の「kanji」を指しています。"
        },
        {
            q: "それは「歩」です。この駒は一マス前に進むことができます。",
            ans: "It is \"fu.\" This piece can move one space forward.",
            exp: "「It is \"fu\"」の「fu」は将棋の駒「歩」の読み方です。「This piece can move」は「この駒は動くことができる」という意味で、将棋のルールを説明しています。「one space forward」は「一マス前に」という意味で、駒の動き方を具体的に説明しています。ゲームのルール説明に使える表現です。"
        }
    ],

    // 中学1年生 Lesson3 Part1 Scene1
    grade1_lesson3_part1_scene1: [
        {
            q: "これはアイスクリーム店です。",
            ans: "This is an ice cream shop.",
            exp: "「This is」は近くにあるものを指す時に使う表現です。「an ice cream shop」は「アイスクリーム店」という意味で、「ice cream」は複合名詞として扱われます。「shop」の前に不定冠詞「an」が付いているのは、「ice cream」が母音で始まるからです。場所や建物を説明する基本的な表現です。"
        },
        {
            q: "あれはチョコレートアイスクリームです。",
            ans: "That is chocolate ice cream.",
            exp: "「That is」は遠くにあるものを指す時に使う表現です。「chocolate ice cream」は「チョコレートアイスクリーム」という意味で、「chocolate」は味を表す形容詞として使われています。「This」と「That」の使い分けは距離感を表現する重要なポイントで、日本語の「これ」「あれ」に対応しています。"
        },
        {
            q: "これはアイスクリーム店ではありません。",
            ans: "This is not an ice cream shop.",
            exp: "「This is not」は「これは〜ではない」という否定の表現です。be動詞の否定文は「be動詞 + not」で作ります。先ほどの肯定文と対比させることで、否定文の作り方を学ぶことができます。場所や物事を否定する時に使える基本的な表現です。"
        },
        {
            q: "あれはチョコレートアイスクリームではありません。",
            ans: "That is not chocolate ice cream.",
            exp: "「That is not」は「あれは〜ではない」という否定の表現です。遠くにあるものについて否定する時に使います。「is not」は「isn't」と短縮することもできます。物の種類や性質を否定する時に使える表現で、誤解を避けるためにも重要な文型です。"
        }
    ],

    // 中学1年生 Lesson3 Part1 Scene2
    grade1_lesson3_part1_scene2: [
        {
            q: "私たちは若葉稲荷神社にいます。これは鳥居です。それは神社への門です。",
            ans: "We're at Wakaba Inari Shrine. This is a torii. It's a gate to the shrine.",
            exp: "「We're」は「We are」の短縮形で「私たちは〜にいる」という意味です。「Wakaba Inari Shrine」は神社名で、「shrine」は「神社」という意味です。「torii」は日本語から来た英単語で「鳥居」のことです。「gate」は「門」という意味で、日本文化を英語で説明する良い例です。"
        },
        {
            q: "わあ、大きいですね。あ、見て、あの犬は怖いです。",
            ans: "Wow, it's big. Oh, look, that dog is scary.",
            exp: "「Wow」は驚きを表す感嘆詞で、「it's big」は「それは大きい」という意味です。「Oh, look」は相手の注意を引く表現で「あ、見て」という意味です。「that dog is scary」は「あの犬は怖い」という意味で、「scary」は「怖い」という形容詞です。感情を率直に表現する自然な会話です。"
        },
        {
            q: "それは犬ではありません。それは白い狐です。稲荷神社では白い狐の像を見ることができます。",
            ans: "That's not a dog. It's a white fox. You can see statues of white foxes at Inari shrines.",
            exp: "「That's not a dog」は「それは犬ではない」という訂正の表現です。「white fox」は「白い狐」という意味で、「white」は色を表す形容詞です。「You can see statues」は「あなたは像を見ることができる」という意味で、「statues」は「像」の複数形です。「at Inari shrines」は「稲荷神社で」という意味で、日本の神社文化について説明しています。誤解を訂正し、文化的背景を教える丁寧な説明です。"
        }
    ],

    // 中学1年生 Lesson3 Part2 Scene1
    grade1_lesson3_part2_scene1: [
        {
            q: "これはインドの紅茶ですか？ — はい、そうです。/ いいえ、違います。",
            ans: "Is this Indian tea? — Yes, it is. / No, it is not.",
            exp: "「Is this」で始まる疑問文は、近くにあるものについて尋ねる表現です。「Indian tea」は「インドの紅茶」という意味で、「Indian」は国籍や出身地を表す形容詞です。答えは「Yes, it is.」「No, it is not.」となり、「it is not」は「it isn't」と短縮できます。物の種類や出身地について確認する実用的な表現です。"
        },
        {
            q: "これは何ですか？ — それは古い辞書です。",
            ans: "What is this? — It is an old dictionary.",
            exp: "「What is this?」は「これは何ですか？」という基本的な疑問文で、物の正体を尋ねる時に使います。「It is an old dictionary」の答えでは、「old」は「古い」という形容詞で、「dictionary」は「辞書」という意味です。「old」が母音で始まるため「an」を使います。物について詳しく知りたい時の自然な会話パターンです。"
        }
    ],

    // 中学1年生 Lesson3 Part2 Scene2
    grade1_lesson3_part2_scene2: [
        {
            q: "これは何ですか？",
            ans: "What is this?",
            exp: "「What is this?」は物の正体を尋ねる最も基本的な疑問文です。知らない物や珍しい物を見つけた時に使う自然な表現で、好奇心を表現することができます。会話のきっかけとしても非常に有効で、相手に説明を求める丁寧な方法です。"
        },
        {
            q: "それはシタールです、インドの伝統的な楽器です。",
            ans: "It's a sitar, a traditional musical instrument in India.",
            exp: "「It's a sitar」は「それはシタールです」という答えで、「sitar」はインドの弦楽器の名前です。カンマの後の「a traditional musical instrument in India」は「sitar」を詳しく説明する同格表現で、「インドの伝統的な楽器」という意味です。知らない物について詳しく説明する時の良い例です。"
        },
        {
            q: "あなたはそれを弾くことができますか？ - 少しです。",
            ans: "Can you play it? - A little.",
            exp: "「Can you play it?」は楽器の演奏能力について尋ねる質問です。「it」は前文の「sitar」を指しています。相手の技能や能力について興味を示す自然な質問で、会話を発展させる効果的な方法です。「A little」は「少し」という意味で、控えめに能力を表現する時に使います。"
        },
        {
            q: "私は時々オンラインレッスンを受けています。",
            ans: "I sometimes take online lessons.",
            exp: "「I sometimes take online lessons」は「私は時々オンラインレッスンを受けています」という意味で、現代的な学習方法を表現しています。「take lessons」は「レッスンを受ける」という熟語表現です。"
        },
        {
            q: "あ、それはあなたのシタールですか？ - はい、そうです。",
            ans: "Oh, is it your sitar? - Yes, it is.",
            exp: "「Is it your sitar?」は所有について尋ねる疑問文です。「your」は「あなたの」という所有格で、物の所有者を確認する時に使います。「Yes, it is.」は所有を肯定する答えです。"
        },
        {
            q: "それは私の叔母からの贈り物です。",
            ans: "It's a gift from my aunt.",
            exp: "「It's a gift from my aunt」は「それは私の叔母からの贈り物です」という意味で、「gift」は「贈り物」、「aunt」は「叔母」という意味です。「from」は贈り主を表す前置詞で、物の由来や出所を説明する時に使います。"
        }
    ],

    // 中学1年生 Lesson3 Part3 Scene1
    grade1_lesson3_part3_scene1: [
        {
            q: "あなたはさくらももこを知っていますか - いいえ。",
            ans: "Do you know Sakura Momoko? - No.",
            exp: "「Do you know」は「あなたは〜を知っていますか？」という意味で、人や物事についての知識を尋ねる表現です。「Sakura Momoko」は日本の漫画家の名前で、「ちびまる子ちゃん」の作者として有名です。「No.」は簡潔な否定の答えで、知らないことを表現しています。"
        },
        {
            q: "彼女は誰ですか？",
            ans: "Who is she?",
            exp: "「Who is she?」は「彼女は誰ですか？」という意味で、人物について詳しく知りたい時に使う疑問文です。知らない人について教えてもらいたい時の自然な反応を示しています。"
        },
        {
            q: "彼女はこの漫画のキャラクターです。彼女のニックネームはまる子です。",
            ans: "She's a character in this manga. Her nickname is Maruko.",
            exp: "「She's a character in this manga」は「彼女はこの漫画のキャラクターです」という説明です。「character」は「登場人物」「キャラクター」という意味で、「manga」は日本語から来た英単語です。「Her nickname is Maruko」は「彼女のニックネームはまる子です」という追加情報を提供しています。"
        },
        {
            q: "あ、彼女を知っています！彼女は親しみやすくて面白いです。私は彼女のアニメが好きです。",
            ans: "Oh, I know her! She's friendly and funny. I like her anime.",
            exp: "「Oh, I know her!」は突然思い出した時の表現で、驚きと認識を表しています。「She's friendly and funny」は「彼女は親しみやすくて面白い」という性格描写で、「friendly」は「親しみやすい」、「funny」は「面白い」という形容詞です。「her anime」は「彼女のアニメ」という意味です。"
        },
        {
            q: "私もです。私はそれで日本語を勉強しています。",
            ans: "Me, too. I study Japanese with it.",
            exp: "「Me, too.」は「私も」という意味で、相手との共通点を表現する簡潔な表現です。「I study Japanese with it」は「私はそれで日本語を勉強しています」という意味で、「with」は手段や方法を表す前置詞です。アニメを日本語学習に活用している創意工夫を表現しています。"
        },
        {
            q: "それは良いアイデアですね。",
            ans: "That's a good idea.",
            exp: "「That's a good idea」は「それは良いアイデアですね」という意味で、相手の方法や提案を褒める表現です。「idea」は「アイデア」「考え」という意味で、相手の創意工夫を評価する時に使います。会話を肯定的に締めくくる自然な表現です。"
        },
        {
            q: "あなたの好きなキャラクターは誰ですか？ — ハリーです。",
            ans: "Who is your favorite character? — Harry.",
            exp: "「Who is your favorite character?」は好きなキャラクターについて尋ねる疑問文です。「favorite」は「お気に入りの」という意味の形容詞で、個人的な好みを表現する時に使います。アニメや漫画、小説などについて話す時によく使われる質問です。"
        },
        {
            q: "彼は賢いです。私は彼がとても好きです。",
            ans: "He is smart. I like him very much.",
            exp: "「Harry」は人名で、恐らく「ハリー・ポッター」のことを指していると思われます。「He is smart」は「彼は賢い」という性格描写で、「smart」は「賢い」「頭が良い」という意味です。「I like him very much」は「私は彼がとても好きです」という強い好意を表現しており、「very much」で程度を強調しています。"
        }
    ],

    // Language Focus1 - 語順と文の種類
    grade1_language_focus1_word_order: [
        {
            q: "私は猫を飼っています。",
            ans: "I have a cat.",
            exp: "この例は日本語と英語の語順の違いを明確に示しています。日本語では「私は（主語）」「猫を（目的語）」「飼っています（動詞）」の順番ですが、英語では「I（主語）」「have（動詞）」「a cat（目的語）」の順番になります。この語順の違いが英語学習の基礎となる重要なポイントです。"
        }
    ],

    grade1_language_focus1_sentence_types: [
        {
            q: "私は田中ハナです。",
            ans: "I am Tanaka Hana.",
            exp: "これはbe動詞を使った肯定文の基本形です。「I am」で「私は〜です」という意味を表現し、自己紹介の最も基本的な文型です。be動詞は主語によって形が変わることに注意しましょう。日常会話で最も頻繁に使われる文型の一つです。"
        },
        {
            q: "私は英語が好きです。",
            ans: "I like English.",
            exp: "これは一般動詞「like」を使った肯定文です。「I like」で「私は〜が好きです」という意味を表現します。一般動詞は主語が三人称単数の時に語尾に「s」が付くことに注意が必要ですが、主語が「I」の時はそのままの形を使います。"
        },
        {
            q: "私は野球ファンではありません。",
            ans: "I am not a baseball fan.",
            exp: "be動詞の否定文は「be動詞 + not」で作ります。「I am not」で「私は〜ではない」という意味になります。「am not」は短縮形「aren't」がないので、そのまま使うか「I'm not」と短縮します。自分の興味や立場を否定する時に使える表現です。"
        },
        {
            q: "私はサッカーをしません。",
            ans: "I do not play soccer.",
            exp: "一般動詞の否定文は「do not + 動詞の原形」で作ります。「do not」は「don't」と短縮することが多く、日常会話でよく使われます。習慣や行動を否定する時に使う基本的な文型で、自分の生活パターンを説明する時に便利です。"
        },
        {
            q: "あなたは野球ファンですか？ — はい、そうです。/ いいえ、違います。",
            ans: "Are you a baseball fan? — Yes, I am. / No, I am not.",
            exp: "be動詞の疑問文は「be動詞 + 主語」の語順で作ります。答えは「Yes, I am.」または「No, I am not.」となり、必ず主語と動詞を含めて答えるのが英語の特徴です。相手の状態や立場について尋ねる基本的な表現です。"
        },
        {
            q: "あなたはサッカーをしますか？ — はい、します。/ いいえ、しません。",
            ans: "Do you play soccer? — Yes, I do. / No, I do not.",
            exp: "一般動詞の疑問文は「Do + 主語 + 動詞の原形」で作ります。答えは「Yes, I do.」または「No, I do not.」となり、「do not」は「don't」と短縮できます。相手の習慣や行動について尋ねる時に使う基本的な文型です。"
        }
    ],

    grade1_language_focus1_nouns: [
        {
            q: "猫たち、猫、りんごたち、一個のりんご、箱たち、一個の箱",
            ans: "cats, cat, apples, an apple, boxes, a box",
            exp: "これらは形がはっきりしていて個数を数えることができる名詞です。複数の時は語尾に「s」を付け、単数の時は「a」や「an」を付けます。「cats」は「猫たち」、「cat」は「猫」、「apples」は「りんごたち」、「an apple」は「一個のりんご」という意味です。日常生活でよく使う基本的な名詞の使い方です。"
        },
        {
            q: "グラス１杯の水、１枚の紙",
            ans: "a glass of water, a piece of paper",
            exp: "本来は数えられない名詞でも、容器や単位を使うことで数えることができます。「a glass of water」は「コップ一杯の水」、「a piece of paper」は「紙一枚」という意味です。「of」を使って量や単位を表現する重要な方法です。"
        },
        {
            q: "水、紙",
            ans: "water, paper",
            exp: "これらは液体や物質など、形が一定でない名詞です。通常は複数形にせず、「a」や「an」も付けません。ただし、前述のように単位を付けることで数えることができます。物質名詞と呼ばれる重要な名詞のカテゴリーです。"
        },
        {
            q: "テニス、音楽",
            ans: "tennis, music",
            exp: "これらは抽象的な概念や活動を表す名詞で、通常は数えることができません。「tennis」はスポーツの名前、「music」は音楽という概念全体を表します。このような名詞も複数形にせず、「a」や「an」を付けません。"
        },
        {
            q: "足→足たち、子ども→子どもたち、魚→魚たち、羊→羊たち",
            ans: "foot→feet, child→children, fish→fish, sheep→sheep",
            exp: "これらは複数形が不規則に変化する名詞です。「foot」は「feet」、「child」は「children」と大きく形が変わります。「fish」と「sheep」は単数形と複数形が同じ形です。これらは暗記が必要な重要な不規則変化です。"
        }
    ],

    // Language Focus2 - be動詞と一般動詞、can、疑問詞
    grade1_language_focus2_be_verb: [
        {
            q: "私はバスケットボールファンです。/ あなたはギタリストです。",
            ans: "I am a basketball fan. / You are a guitarist.",
            exp: "be動詞は主語によって形が変わります。「I」の時は「am」、「you」の時は「are」を使います。「I am a basketball fan」は「私はバスケットボールファンです」、「You are a guitarist」は「あなたはギタリストです」という意味で、職業や趣味、身分を表現する時に使います。"
        },
        {
            q: "これはアイスクリーム店です。",
            ans: "This is an ice cream shop.",
            exp: "「This」（これ）が主語の時は「is」を使います。近くにある物や場所を指す時に使う表現で、「This is」は「これは〜です」という意味です。「an ice cream shop」は「アイスクリーム店」で、「ice cream」が母音で始まるため「an」を使います。"
        },
        {
            q: "あなたはギタリストですか？ — はい、そうです。/ いいえ、違います。",
            ans: "Are you a guitarist? — Yes, I am. / No, I am not.",
            exp: "be動詞の疑問文は「be動詞 + 主語」の語順で作ります。「You are a guitarist.」を疑問文にすると「Are you a guitarist?」となります。相手の職業や趣味について尋ねる基本的な表現で、会話のきっかけとしてよく使われます。"
        },
        {
            q: "これはアイスクリーム店ですか？ — はい、そうです。/ いいえ、違います。",
            ans: "Is this an ice cream shop? — Yes, it is. / No, it is not.",
            exp: "「This is an ice cream shop.」を疑問文にした形です。物や場所について確認する時に使う表現で、「Is this」で「これは〜ですか？」という意味になります。買い物や道案内の場面でよく使われる実用的な表現です。「This」について答える時は「it」を使います。"
        },
        {
            q: "私はバスケットボールファンではありません。/ あなたはギタリストではありません。",
            ans: "I am not a basketball fan. / You are not a guitarist.",
            exp: "be動詞の否定文は「be動詞 + not」で作ります。「I am not」は短縮して「I'm not」、「You are not」は「You aren't」と短縮できます。自分や相手について否定的な情報を伝える時に使う基本的な文型です。"
        },
        {
            q: "これはアイスクリーム店ではありません。",
            ans: "This is not an ice cream shop.",
            exp: "「This is not」で「これは〜ではない」という意味の否定文になります。「is not」は「isn't」と短縮できます。誤解を訂正したり、間違った情報を否定したりする時に使える重要な表現です。"
        }
    ],

    grade1_language_focus2_general_verbs: [
        {
            q: "私は音楽が好きです。/ あなたはサッカーをします。",
            ans: "I like music. / You play soccer.",
            exp: "一般動詞は動作や状態を表す動詞で、be動詞以外の動詞のことです。「like」は「好む」、「play」は「する」「プレイする」という意味です。主語が「I」や「you」の時は動詞の原形をそのまま使います。日常的な行動や好みを表現する基本的な文型です。"
        },
        {
            q: "あなたはサッカーをしますか？ — はい、します。/ いいえ、しません。",
            ans: "Do you play soccer? — Yes, I do. / No, I do not.",
            exp: "一般動詞の疑問文は「Do + 主語 + 動詞の原形」で作ります。「You play soccer.」を疑問文にすると「Do you play soccer?」となります。相手の習慣や行動について尋ねる時に使う基本的な表現で、会話を始める時によく使われます。"
        },
        {
            q: "私は音楽が好きではありません。/ あなたはサッカーをしません。",
            ans: "I do not like music. / You do not play soccer.",
            exp: "一般動詞の否定文は「do not + 動詞の原形」で作ります。「do not」は「don't」と短縮することが多く、「I don't like music」「You don't play soccer」となります。習慣や好みを否定する時に使う基本的な文型です。"
        }
    ],

    grade1_language_focus2_lets_imperative: [
        {
            q: "写真を撮りましょう。",
            ans: "Let's take a picture.",
            exp: "「Let's」は「〜しましょう」という提案や誘いを表す表現です。「Let's + 動詞の原形」の形で使い、相手と一緒に何かをすることを提案する時に使います。「take a picture」は「写真を撮る」という意味で、友達や家族との楽しい時間を提案する自然な表現です。"
        },
        {
            q: "ギターを弾きなさい。/ ギターを弾いてはいけません。",
            ans: "Play the guitar. / Don't play the guitar.",
            exp: "命令文は動詞の原形で始まります。「Play the guitar」は肯定の命令文で「ギターを弾きなさい」という意味です。否定の命令文は「Don't + 動詞の原形」で作り、「Don't play the guitar」は「ギターを弾いてはいけません」という意味になります。"
        },
        {
            q: "気をつけなさい。/ 遅れてはいけません。",
            ans: "Be careful. / Don't be late.",
            exp: "be動詞を使った命令文もあります。「Be careful」は「気をつけなさい」、「Don't be late」は「遅れてはいけません」という意味です。be動詞の命令文は状態や性質について指示する時に使われ、日常生活でよく使われる表現です。"
        }
    ],

    grade1_language_focus2_can: [
        {
            q: "私はギターを弾くことができます。",
            ans: "I can play the guitar.",
            exp: "「can」は能力を表す助動詞で「〜できる」という意味です。「can + 動詞の原形」の形で使い、自分や相手の能力について表現する時に使います。楽器の演奏、スポーツ、言語など、様々な技能について表現できる便利な助動詞です。"
        },
        {
            q: "あなたはギターを弾くことができますか？ — はい、できます。/ いいえ、できません。",
            ans: "Can you play the guitar? — Yes, I can. / No, I cannot.",
            exp: "「can」の疑問文は「Can + 主語 + 動詞の原形」で作ります。答えは「Yes, I can.」または「No, I cannot.」となります。「cannot」は「can't」と短縮することが多く、相手の能力について尋ねる時に使う基本的な表現です。"
        },
        {
            q: "私はギターを弾くことができません。",
            ans: "I cannot play the guitar.",
            exp: "「cannot」は「can」の否定形で「〜できない」という意味です。「can not」と分けて書くこともありますが、「cannot」と一語で書くのが一般的です。自分にできないことを表現する時に使い、謙虚さを示すこともできます。"
        }
    ],

    grade1_language_focus2_question_words: [
        {
            q: "これは何ですか？ — それは古い辞書です。",
            ans: "What is this? — It is an old dictionary.",
            exp: "「What」は「何」という意味の疑問詞で、物の正体や種類について尋ねる時に使います。「What is this?」は「これは何ですか？」という最も基本的な質問で、知らない物について尋ねる時に使います。答えは「It is」で始まり、具体的な物の名前を答えます。"
        },
        {
            q: "あなたは週末に何をしますか？ — 私はよく家で映画を見ます。",
            ans: "What do you do on weekends? — I often watch movies at home.",
            exp: "「What do you do」は「あなたは何をしますか」という意味で、行動や活動について尋ねる表現です。「on weekends」は「週末に」という時を表す表現で、相手の生活パターンや趣味について知りたい時に使う自然な質問です。"
        },
        {
            q: "あなたはどんな音楽が好きですか？ — 私はJ-popが好きです。",
            ans: "What music do you like? — I like J-pop.",
            exp: "「What music」は「どんな音楽」という意味で、音楽のジャンルや種類について尋ねる表現です。相手の音楽的な好みを知るための質問で、会話のきっかけとしてもよく使われます。「J-pop」は「Japanese pop music」の略です。"
        },
        {
            q: "あなたは何頭のパンダを見ますか？ — 私は2頭のパンダを見ます。",
            ans: "How many pandas do you see? — I see two pandas.",
            exp: "「How many」は「いくつの」「何個の」という意味で、数量について尋ねる疑問詞です。数えられる名詞の複数形と一緒に使い、「How many + 複数名詞」の形になります。動物園や水族館などで動物の数を数える時によく使われる表現です。"
        },
        {
            q: "あなたの好きなキャラクターは誰ですか？ — ハリーです。",
            ans: "Who is your favorite character? — Harry.",
            exp: "「Who」は「誰」という意味の疑問詞で、人について尋ねる時に使います。「Who is」で「誰ですか」という質問になり、答えは人の名前や関係を表す言葉になります。アニメ、漫画、小説などのキャラクターについて話す時によく使われます。"
        },
        {
            q: "あなたの誕生日はいつですか？ — 私の誕生日は7月14日です。",
            ans: "When is your birthday? — My birthday is July 14.",
            exp: "「When」は「いつ」という意味の疑問詞で、時間や日付について尋ねる時に使います。誕生日、記念日、予定などについて質問する時に使われ、答えは具体的な日付や時間を表す表現になります。「July 14」は「7月14日」という意味です。"
        },
        {
            q: "あなたはどこに行きたいですか？ — 私は屋久島に行きたいです。",
            ans: "Where do you want to go? — I want to go to Yakushima.",
            exp: "「Where」は「どこ」という意味の疑問詞で、場所について尋ねる時に使います。「Where do you want to go?」は「どこに行きたいですか？」という意味で、旅行の計画や希望について話す時によく使われます。「Yakushima」は鹿児島県の屋久島のことです。"
        }
    ],

    // Take Action! Talk1 - 道案内
    grade1_take_action_talk1: [
        {
            q: "すみません。クラウンケーキショップにはどうやって行けますか？",
            ans: "Excuse me. How can I get to Crown Cake Shop?",
            exp: "「Excuse me」は人に話しかける時の丁寧な表現で「すみません」という意味です。「How can I get to」は「〜にはどうやって行けますか」という道案内を求める基本的な表現です。「Crown Cake Shop」は店名で、観光地や街中で道を尋ねる時によく使われる実用的な表現です。"
        },
        {
            q: "えーと、この道をまっすぐ行ってください。それから2番目の角を左に曲がってください。",
            ans: "Um, go straight on this street. Then turn left at the second corner.",
            exp: "「Um」は考えている時に使う間投詞で「えーと」という意味です。「go straight」は「まっすぐ行く」、「on this street」は「この道を」という意味です。「Then」は「それから」という接続詞で、「turn left」は「左に曲がる」、「at the second corner」は「2番目の角で」という意味です。道案内の基本的な表現です。"
        },
        {
            q: "まっすぐ、それから2番目の角を左ですね。",
            ans: "Straight, then left at the second corner.",
            exp: "これは相手の説明を確認するための表現です。道案内を受けた時に、正しく理解したかどうかを確認するために相手の言葉を繰り返しています。「Straight, then left at the second corner」で要点をまとめて確認しており、コミュニケーションを確実にする良い方法です。"
        },
        {
            q: "はい。それはあなたの右側にあります。",
            ans: "Yes. It's on your right.",
            exp: "「Yes」で確認を肯定し、「It's on your right」で「それはあなたの右側にあります」という追加の情報を提供しています。「on your right」は「あなたの右側に」という意味で、最終的な目標地点の位置を教える表現です。道案内の最後によく使われる表現です。"
        },
        {
            q: "分かりました。ありがとうございます。",
            ans: "I see. Thank you.",
            exp: "「I see」は「分かりました」「理解しました」という意味で、相手の説明を理解したことを表現しています。「Thank you」は感謝を表す基本的な表現で、道案内をしてもらった時の自然な反応です。丁寧で感謝の気持ちを込めた締めくくりの表現です。"
        }
    ],

    // 総合練習問題
    grade1_comprehensive_practice: [
        {
            q: "「私はテニスが好きです。毎日練習します。」を英語にしなさい。",
            ans: "I like tennis. I practice every day.",
            exp: "二つの文を英語にする問題です。「私はテニスが好きです」は「I like tennis」となり、一般動詞「like」を使います。「毎日練習します」は「I practice every day」で、こちらも一般動詞「practice」を使います。「every day」は「毎日」という意味の時を表す表現です。"
        },
        {
            q: "「彼女は歌手ですか？」「いいえ、違います。彼女はダンサーです。」を英語にしなさい。",
            ans: "Is she a singer? No, she is not. She is a dancer.",
            exp: "be動詞を使った疑問文とその答え、そして訂正の文です。「彼女は歌手ですか？」は「Is she a singer?」となり、be動詞「is」を文頭に置いて疑問文を作ります。否定の答えは「No, she is not.」で、訂正は「She is a dancer.」となります。"
        },
        {
            q: "「あなたはピアノを弾くことができますか？」「はい、少し弾けます。」を英語にしなさい。",
            ans: "Can you play the piano? Yes, I can play a little.",
            exp: "助動詞「can」を使った能力についての疑問文と答えです。「あなたはピアノを弾くことができますか？」は「Can you play the piano?」となり、楽器名の前には「the」を付けます。「はい、少し弾けます」は「Yes, I can play a little.」で、「a little」は「少し」という意味です。"
        },
        {
            q: "「これは何ですか？」「それは日本の伝統的な楽器です。」を英語にしなさい。",
            ans: "What is this? It is a traditional Japanese musical instrument.",
            exp: "疑問詞「What」を使った疑問文とその答えです。「これは何ですか？」は「What is this?」という基本的な疑問文です。答えは「It is a traditional Japanese musical instrument.」となり、「traditional」は「伝統的な」、「musical instrument」は「楽器」という意味です。"
        },
        {
            q: "「私の趣味は写真撮影です。よく公園で動物の写真を撮ります。」を英語にしなさい。",
            ans: "My hobby is taking pictures. I often take pictures of animals in the park.",
            exp: "趣味について表現する文です。「私の趣味は写真撮影です」は「My hobby is taking pictures.」となり、「taking pictures」は動名詞として使われています。「よく公園で動物の写真を撮ります」は「I often take pictures of animals in the park.」で、「often」は頻度を表す副詞、「in the park」は場所を表す表現です。"
        }
    ]
};