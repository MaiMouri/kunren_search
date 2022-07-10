const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.kyufu.mhlw.go.jp/kensaku/SSR/SSR101Scr02S/SSR101Scr02SInit.form
  await page.goto('https://www.kyufu.mhlw.go.jp/kensaku/SSR/SSR101Scr02S/SSR101Scr02SInit.form');
  // Click td:has-text("第四次産業革命スキル習得講座") >> nth=3
  await page.locator('td:has-text("第四次産業革命スキル習得講座")').nth(3).click();
  // Click text=【第四次産業革命スキル習得講座認定制度】 検 索 >> input[type="button"]
  await page.locator('text=【第四次産業革命スキル習得講座認定制度】 検 索 >> input[type="button"]').click();
  // assert.equal(page.url(), 'https://www.kyufu.mhlw.go.jp/kensaku/SSR/SSR101Scr02S/SSR101Scr02SSearch.form');

  let total = await page.innerText('#SSR102Scr01LForm > div.blockCenter.shisetsuBunnyaWidth > table.shisetsuBunnyaPagingWidth.tableLayoutFix > tbody > tr > td > span > span:nth-child(1)');
  total = await total.replace(/[^0-9]/g, '');
  console.log(await total);

  const datas = []
  // 施設名
  for (let i = 1; i <= 28; i++) {
    const company_name = await page.innerText(`#shisetsu_line${i}`)
    console.log(company_name);

    const zipcode = await page.innerText(`[name="p01Table.recordList[${i - 1}]"] >> td.postno80`);
    const address = await page.innerText(`[name="p01Table.recordList[${i - 1}]"] > td.width345.wrap > #location`);
    const tel = await page.innerText(`[name="p01Table.recordList[${i - 1}]"] > td.width128 > #telno`);
    console.log(zipcode, address, tel);
    await page.locator(`#shisetsu_line${i} >> text=${company_name}`).click();
    let kouza_total = await page.innerText('#SSR103Scr01LForm > div.blockCenter.kouzaBunnyaWidth > table.kouzaBunnyaPagingWidth.tableLayoutFix > tbody > tr:nth-child(2) > td > span > span:nth-child(1)');
    kouza_total = await kouza_total.replace(/[^0-9]/g, '');
    console.log(await kouza_total);


    for (let j = 1; j <= kouza_total; j++) {
      await page.locator(`#shosai_line${j}`).click();
      const school_name = await page.innerText('#school_name');
      const jissisha = await page.innerText('#jissisha');
      const shiteino_cd = await page.innerText('#shiteino_cd');
      const shitei_kikan = await page.innerText('#shitei_kikan');
      const kouzaname = await page.innerText('#kouzaname');
      const kunrennaiyou = await page.innerText('#kunrennaiyou');
      const jisshi_houhou = await page.innerText('#jisshi_houhou');
      const kouzateiin = await page.innerText('#kouzateiin');
      const kunrenkikan = await page.innerText('#kunrenkikan');
      const kunrentotal = await page.innerText('#kunrentotal');
      const kaikoutsuki = await page.innerText('#kaikoutsuki');
      const k_keihi_total = await page.innerText('#k_keihi_total');
      // console.log(kouzaname, kunrenkikan, shiteino_cd, k_keihi_total);
      // console.log(kunrennaiyou);

      let data = {
        'スクール名': school_name,
        '実施者': jissisha,
        '指定番号': shiteino_cd,
        '指定期間': shitei_kikan,
        '講座名称': kouzaname,
        '講座内容': kunrennaiyou,
        '実施方法': jisshi_houhou,
        '入学定員': kouzateiin,
        '訓練期間': kunrenkikan,
        '訓練時間': kunrentotal,
        '開講月': kaikoutsuki,
        // '受給者に占める女性の割合': '#SSR103Scr02MForm > div.fontFamily > table:nth-child(2) > tbody > tr:nth-child(9) > td.styleSchoolContents',
        '受講料合計': k_keihi_total,
        'zipcode': zipcode,
        'address': address,
        'tel': tel
      }
      await datas.push(data)
      await page.locator('#btn_back').click();
    }
    console.log('------------------------------');
    console.log('Data created!');
    console.log('------------------------------');

    await page.locator('#btn_back').click();

  }

  const intTotal = parseInt(total, 10)
  for (let i = 29; i <= intTotal; i++) {
    const company_name = await page.innerText(`#shisetsu_line${i}`)
    console.log(company_name);

    const zipcode = await page.innerText(`[name="p01Table.recordList[${i - 1}]"] >> td.postno80`);
    const address = await page.innerText(`[name="p01Table.recordList[${i - 1}]"] > td.width345.wrap > #location`);
    const tel = await page.innerText(`[name="p01Table.recordList[${i - 1}]"] > td.width128 > #telno`);

    await page.locator(`#shisetsu_line${i} >> text=${company_name}`).click();
    let kouza_total = await page.innerText('#SSR103Scr01LForm > div.blockCenter.kouzaBunnyaWidth > table.kouzaBunnyaPagingWidth.tableLayoutFix > tbody > tr:nth-child(2) > td > span > span:nth-child(1)');
    kouza_total = await kouza_total.replace(/[^0-9]/g, '');
    console.log(await kouza_total);


    for (let j = 1; j <= kouza_total; j++) {
      await page.locator(`#shosai_line${j}`).click();
      await page.waitForTimeout(1000)
      const school_name = await page.innerText('#school_name');
      const jissisha = await page.innerText('#jissisha');
      const shiteino_cd = await page.innerText('#shiteino_cd');
      const shitei_kikan = await page.innerText('#shitei_kikan');
      const kouzaname = await page.innerText('#kouzaname');
      const kunrennaiyou = await page.innerText('#kunrennaiyou');
      const jisshi_houhou = await page.innerText('#jisshi_houhou');
      const kouzateiin = await page.innerText('#kouzateiin');
      const kunrenkikan = await page.innerText('#kunrenkikan');
      const kunrentotal = await page.innerText('#kunrentotal');
      const kaikoutsuki = await page.innerText('#kaikoutsuki');
      const k_keihi_total = await page.innerText('#k_keihi_total');
      // console.log(kouzaname, kunrenkikan, shiteino_cd, k_keihi_total);
      // console.log(kunrennaiyou);

      let data = {
        'スクール名': school_name,
        '実施者': jissisha,
        '指定番号': shiteino_cd,
        '指定期間': shitei_kikan,
        '講座名称': kouzaname,
        '講座内容': kunrennaiyou,
        '実施方法': jisshi_houhou,
        '入学定員': kouzateiin,
        '訓練期間': kunrenkikan,
        '訓練時間': kunrentotal,
        '開講月': kaikoutsuki,
        // '受給者に占める女性の割合': '#SSR103Scr02MForm > div.fontFamily > table:nth-child(2) > tbody > tr:nth-child(9) > td.styleSchoolContents',
        '受講料合計': k_keihi_total,
        'zipcode': zipcode,
        'address': address,
        'tel': tel
      }
      await datas.push(data)
      await page.locator('#btn_back').click();
    }
    console.log('------------------------------');
    console.log('Data created!');
    console.log('------------------------------');

    await page.locator('#btn_back').click();

  }
  const createFile = (pathName, source) => {
    const toJSON = JSON.stringify(source);
    fs.writeFile(pathName, toJSON, (err) => {
      if (err) rej(err);
      if (!err) {
        console.log('JSONファイルを生成しました');
      }
    });
  };

  createFile('datas.json', datas);
  // console.log(datas);

  // <input type="button" id="btn_back" class="ws_button_common ui-widget-content ui-corner-all" value="　一　画　面　戻　る　　">
  //
  // let data = {
  //   'スクール名' : school_name,
  //   '実施者' : jissisha,
  //   '指定番号' : shiteino_cd,
  //   '指定期間' : shitei_kikan,
  //   '講座名称' : kouzaname,
  //   '講座内容' : kunrennaiyou,
  //   '実施方法' : jisshi_houhou,
  //   '入学定員' : kouzateiin,
  //   '訓練期間' : kunrenkikan,
  //   '訓練時間' : kunrentotal,
  //   '開講月' : kaikoutsuki,
  //   '受給者に占める女性の割合' : '#SSR103Scr02MForm > div.fontFamily > table:nth-child(2) > tbody > tr:nth-child(9) > td.styleSchoolContents',
  //   '受講料合計' : k_keihi_total
  //   '取得目標とする資格' : mokuhyou_level,
  //   '当該資格・試験の実施機関名称' : mokuhyou_kikan,
  //   '上記以外の資格の名称' : syutokushikaku_sonota,
  //   '取得目標とする資格' : mokuhyou_level,
  //   '資格取得のための要件または受験資格' : mokuhyou_youken,
  //   'この講座の修了により習得できる技能・知識の内容及び水準' : mokuhyou_ginou,
  //   '当該技能・知識の習得が就職・職務遂行に必須または有利となる職種・職務' : mokuhyou_syokusyu,
  //   '習得された技能・知識が活用されている業界と活用状況' : mokuhyou_katuyou,
  //   '受講にあたって必要な実務経験' : nyukoujoken_keiken,
  //   '受講に最低限有しておくべき技能・知識の内容及び水準' : nyukoujoken_ginou,
  //   '受講認定基準' : jyukouninteikijyun,
  //   '受講認定基準に係る、教育目標に対する技能・知識のレベル到達度把握・測定方法' : jyukouninteikijyun_sokutei,
  //   '修了認定基準' : syuuryouninteikijun,
  //   '教育目標に達する技能・知識のレベル到達度把握・測定方法' : kouka_sokuteihouhou,
  //   'スクーリング場所・時期・期間等' : tusushin_schooling,
  //   '受講者に対する習得度・理解度についての具体的な助言・指導方法' : sochi_houhou,
  //   '受講中・修了時における資格取得・就職へのバックアップ体制' : sochi_backup,
  //   '特記事項' : tokkijikou,
  //
  //   '講座名称' : kouzaname,
  //   '期間' : kunrenkikan,
  // }

  // await page.locator('#shisetsu_line1 >> text=ｉＬｅｃｔ Ｓｔｕｄｉｏ').click();
  // const count2 = await page.innerText('#SSR103Scr01LForm > div.blockCenter.kouzaBunnyaWidth > table.kouzaBunnyaPagingWidth.tableLayoutFix > tbody > tr:nth-child(2) > td > span > span:nth-child(1)')
  // console.log(await count2);
  await page.screenshot({ path: `./images.png` });

  console.log('finished');
  // ---------------------
  await context.close();
  await browser.close();
})();
