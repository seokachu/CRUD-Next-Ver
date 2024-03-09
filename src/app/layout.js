import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: '웹 튜토리얼',
  description: 'SeoyoungPark',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>
          <Link href="/">Web</Link>
        </h1>
        <ol>
          <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <Link href="/read/2">css</Link>
          </li>
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
