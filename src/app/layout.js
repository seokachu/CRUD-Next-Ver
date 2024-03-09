import Link from 'next/link';
import './globals.css';
// import { useEffect, useState } from 'react';

// export const metadata = {
//   title: '웹 튜토리얼',
//   description: 'SeoyoungPark',
// };

export default async function RootLayout({ children }) {
  // const [topics, setTopics] = useState([]);
  // useEffect(() => {
  // fetch('http://localhost:9999/topics')
  //   .then((resp) => resp.json())
  //   .then((result) => {
  //     setTopics(result);
  //   });
  // }, []);
  const resp = await fetch('http://localhost:9999/topics');
  const topics = await resp.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">Web</Link>
        </h1>
        <ol>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">create</Link>
          </li>
          <li>
            <Link href="/update/1">update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
