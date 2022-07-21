import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://reduxjs.org/',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'Meemu',
    url: 'https://google.com/',
    author: 'Stine Nathanihan',
    num_comments: 77,
    points: 7,
    objectID: 2
  }
];

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <hr />
  <Search />
  <List />
  </div>
);

const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
);

const List = () => (
  <ul>
      {list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>Title:{item.title},</span>
            <span>Comment Count:{item.num_comments},</span>
            <span>Author: {item.author}</span>
          </li>
        ))}
  </ul>
);

export default App; 