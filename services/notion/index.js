const Client = require('@notionhq/client')['Client']
console.log('Client', Client)
const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

const query = (filter = undefined, sort = undefined) => {
  return new Promise((resolve, reject) => {
    notion.databases.query({
      database_id: databaseId,
      filter,
      sort,
    }).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports = query;
