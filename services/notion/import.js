const addItem = require('./index')['addItem']
const fs = require('fs');
const readline = require('readline');
let count = 0
const readInterface = readline.createInterface({
  input: fs.createReadStream('./CET6_1.json'),
  output: null,
});

readInterface.on('line', function(line) {
  count++
  console.log('count', count)
  line = JSON.parse(line)
  const content = line['content']['word']['content']
  let more = 'US: ' + content['usphone'] + '\n'
    + 'UK: ' + content['ukphone'] + '\n'
    + content['sentence']?.['sentences']?.[0]?.['sContent'] + '\n'
    + content['sentence']?.['sentences']?.[0]?.['sCn'] + '\n'
  let zh = content['trans'].reduce((o, i) => {
    return o += i['tranCn'] + '\n'
  }, '')
  let item = {
    zh,
    en: line['headWord'],
    more,
  }
  addItem(item)
});
