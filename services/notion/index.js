const Client = require('@notionhq/client')['Client']

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

exports.query = (params) => {
  return new Promise((resolve, reject) => {
    notion.databases.query({
      database_id: databaseId,
      ...params
    }).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

exports.updateDatabase = (params) => {
  return new Promise((resolve, reject) => {
    notion.databases.update({
      database_id: databaseId,
      ...params
    }).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

exports.updatePage = (params) => {
  return new Promise((resolve, reject) => {
    notion.pages.update({
      ...params
    }).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

exports.addItem = (item) => {
  const newPage = {
    EN: {
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": item.en
          }
        },
      ]
    },
    ZH: {
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": item.zh
          }
        },
      ]
    },
    More: {
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": item.more
          }
        },
      ]
    },
  };
  notion.pages.create({
    parent: { database_id: databaseId },
    properties: newPage,
  })
}
