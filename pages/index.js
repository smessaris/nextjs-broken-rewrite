import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>With the rewrites configuration in next.config.js, <br />any route that does not exist is rewritten to /foo.</p>
        <table className={styles.testTable}>
          <thead>
            <th>URL</th>
            <th>Expected result</th>
            <th>Actual result</th>
          </thead>
          <tbody>
            <tr>
              <td><a href="/">/</a></td>
              <td>This page</td>
              <td>This page</td>
            </tr>
            <tr>
              <td><a href="/foo">/foo</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td><a href="/bar">/bar</a></td>
              <td>BAR</td>
              <td>BAR</td>
            </tr>
            <tr>
              <td><a href="/not-existing-route">/not-existing-route</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td><a href="/en">/en</a></td>
              <td>This page</td>
              <td>This page</td>
            </tr>
            <tr>
              <td><a href="/en/foo">/en/foo</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td><a href="/en/bar">/en/bar</a></td>
              <td>BAR</td>
              <td>BAR</td>
            </tr>
            <tr>
              <td><a href="/en/non-existing-route">/en/non-existing-route</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
          </tbody>
        </table>
        <p>However, the behavior seems to be bugged for the frontpage, <br />when adding GET params combined with i18n path.</p>
        <table className={styles.testTable}>
          <thead>
            <th>URL</th>
            <th>Expected result</th>
            <th>Actual result</th>
          </thead>
          <tbody>
            <tr>
              <td><a href="/?param=something">/?param=something</a></td>
              <td>This page</td>
              <td>This page</td>
            </tr>
            <tr>
              <td><a href="/foo?param=something">/foo?param=something</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td><a href="/bar?param=something">/bar?param=something</a></td>
              <td>BAR</td>
              <td>BAR</td>
            </tr>
            <tr>
              <td><a href="/non-existing-route?param=something">/non-existing-route?param=something</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
            <tr className={styles.error}>
              <td><a href="/en?param=something">/en?param=something</a></td>
              <td>This page</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td><a href="/en/foo?param=something">/en/foo?param=something</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
            <tr>
              <td><a href="/en/bar?param=something">/en/bar?param=something</a></td>
              <td>BAR</td>
              <td>BAR</td>
            </tr>
            <tr>
              <td><a href="/en/non-existing-route?param=something">/en/non-existing-route?param=something</a></td>
              <td>FOO</td>
              <td>FOO</td>
            </tr>
          </tbody>
        </table>
      </main>

    </div>
  )
}
