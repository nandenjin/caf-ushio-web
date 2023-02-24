/** @jsxImportSource @emotion/react */

import { TextWrap } from './TextWrap'

export const PageIndexSectionCredit: React.FC = () => (
  <section css={{}}>
    <TextWrap>
      <h2>クレジット</h2>
      <table>
        <tbody>
          <tr>
            <th>主催</th>
            <td>
              <a
                href="https://gendai-art.org/"
                target="_blank"
                rel="noopener norefferer noreferrer"
              >
                公益財団法人現代芸術振興財団
              </a>
            </td>
          </tr>
          <tr>
            <th>グラフィックデザイン</th>
            <td>
              <a
                href="https://takuto-okamoto.com/"
                target="_blank"
                rel="noopener norefferer noreferrer"
              >
                岡本太玖斗
              </a>
            </td>
          </tr>
          <tr>
            <th>施工</th>
            <td>
              <a
                href="http://higure1715cas.com/"
                target="_blank"
                rel="noopener norefferer noreferrer"
              >
                HIGURE 17-15 cas
              </a>{' '}
              /{' '}
              <a
                href="https://www.oaroar.com/"
                target="_blank"
                rel="noopener norefferer noreferrer"
              >
                株式会社オール
              </a>
            </td>
          </tr>
          <tr>
            <th>会場協力</th>
            <td>
              <a
                href="https://space-roppongi.tokyo/"
                target="_blank"
                rel="noopener norefferer noreferrer"
              >
                Space Roppongi
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        展示の作品には、国土地理院オルソ画像、国土交通省位置参照情報、OpenStreetMapをはじめとするデータを加工して使用しました。またopenFrameworks、Blenderをはじめとする、ユーザコミュニティにより維持されているツールを利用し制作しました。誰もが情報を自由に利活用できるオープンな社会への賛美を込め、これらのリソースの整備・開発に貢献してきたみなさまに謝意を表します。
      </p>
    </TextWrap>
  </section>
)
