'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const blogInfo = require('../blogInfo')

class BlogsController extends Controller {
  async all() {
    const { ctx } = this;
    const res = []
    blogInfo.forEach(item => {
      res.push(
        {
          id: item.id,
          name: item.name, 
          imgUrl: item.imgUrl,
          date: item.date,
          content: fs.readFileSync(path.resolve('./app/blog/' + item.name)).toString(),
        }
      )
    })
    ctx.body = res
  }
  async index() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = blogInfo.filter(item => item.id === Number(id));
    ctx.body = {
      id: res[0].id,
      name: res[0].name,
      imgUrl: res[0].imgUrl,
      date: res[0].date,
      content: fs.readFileSync(path.resolve('./app/blog/' + res[0].name), 'utf-8'),
    }
  }
}

module.exports = BlogsController;
