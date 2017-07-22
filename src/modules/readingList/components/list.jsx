import React from 'react';

const formData = [
  {
    _id: 'ewrer32',
    name: 'React引领未来的用户界面开发框架',
    readAt: new Date('2016-07-03'),
    createdAt: new Date('2016-09-03'),
    author: 'twk',
  },
  {
    _id: 'ewrer3asdf2',
    name: 'JavaScript面向对象编程指南',
    readAt: new Date('2016-08-03'),
    createdAt: new Date('2016-09-03'),
    author: 'twk2',
  },
  {
    _id: 'ewreafgr32',
    name: 'ES6标准入门',
    readAt: new Date('2016-08-03'),
    createdAt: new Date('2016-11-03'),
    author: 'ruanyifeng',
  },
];

export default function () {
  return (
    <div>
      {
        formData.map(({ name, _id, author, readAt }) =>
          (<div key={_id}>
            <span>{name}</span>
            <span>{author}</span>
            <span>{readAt.getTime()}</span>
          </div>))
      }
    </div>
  );
}
