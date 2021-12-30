import { Container, Center, P, Anchor, Tooltip } from '~/components'
import { styled } from '~/stitches'

const FooterStyled = styled('footer', {
  py: '$1',
  mt: '10rem',
})

const FooterText = styled('div', {
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  textAlign: 'center',
  p: {
    fontSize: '$-2',
    '@tablet': {
      fontSize: '$-1',
    },
  },
})

/**
 * Footer
 */
export const Footer = () => (
  <FooterStyled>
    <Container>
      <Center>
        <FooterText>
          <P>© M Haidar Hanif 2077 </P>

          <P lang="ja">
            <Tooltip text="🌏 World 🌍 Wide 🌎 Web">
              🌏 ワールド 🌍 ワイド 🌎 ウェブ
            </Tooltip>
          </P>
          <P>
            <Anchor
              css={{ color: '$text' }}
              href="https://github.com/mhaidarhanif/mhaidarhanif-web"
            >
              🐙 Code
            </Anchor>
            <span> &#8594; </span>
            <Anchor css={{ color: '$text' }} href="https://beta.reactjs.org">
              ⚛️ React
            </Anchor>
            <span> &#43; </span>
            <Anchor css={{ color: '$text' }} href="https://remix.run">
              💿 Remix
            </Anchor>
            <span> &#8594; </span>
            <Anchor css={{ color: '$text' }} href="https://vercel.com">
              ▲ Vercel
            </Anchor>
          </P>
        </FooterText>
      </Center>
    </Container>
  </FooterStyled>
)
