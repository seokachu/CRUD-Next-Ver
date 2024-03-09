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
          <a href="/">Web</a>
        </h1>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
        </ol>
        {children}
        <ul>
          <li>
            <a href="/create">create</a>
          </li>
          <li>
            <a href="/update/1">update</a>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
