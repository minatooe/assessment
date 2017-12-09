(function () {
    'use strict';
    const userNameInput = document.getElementById('userName');
    const assesmentButton = document.getElementById('assesment');
    const resultArea = document.getElementById('result-Area');
    const tweetArea = document.getElementById('tweet-Area');

    assesmentButton.onclick = () => {
        const userName = userNameInput.value;
        console.log('ボタンが押されました');
        if (userName.length === 0) {
            return;
        }

        removeAllChildren(resultArea);

        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultArea.appendChild(header);

        const paragraph = document.createElement('p');
        const result = assesment(userName);
        paragraph.innerText = result;
        resultArea.appendChild(paragraph);
        
        twttr.widgets.load();
        const tweetButtonAtag =document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D&text=' + encodeURIComponent(result);
        tweetButtonAtag.setAttribute('href',hrefValue);
        tweetButtonAtag.className='twitter-hashtag-button';
        tweetButtonAtag.innerText='Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%81%84%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D';
        tweetArea.appendChild(tweetButtonAtag);

    };


    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
        '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
        '{userName}のいいところはいとしさです。たくさんの人があなたに会いたくて会いたくて震えています。',
        '{userName}のいいところは切なさです。あなたが時折見せる笑顔にも影を感じて多くの人が幸せにしてあげたいと切望しています。',
        '{userName}のいいところは心強さです。こんな時でもあなたなら何とかしてくれる、多くの人がそう期待しています。'
    ];

    /*
    名前の文字列を渡すと診断結果を返す関数
    @param{string} userNameユーザー名
    @return{string}　診断結果
    */

    function assesment(userName) {
        let sumOfCharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
        }
        console.log(sumOfCharCode);
        const index = sumOfCharCode % answers.length;
        let result = answers[index];
        console.log(index);
        result = result.replace(/\{userName\}/g, userName);


        //shori
        return result;
    }

    function removeAllChildren(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        return ;

    }

})();
