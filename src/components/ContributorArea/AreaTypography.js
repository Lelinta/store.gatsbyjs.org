import styled from '@emotion/styled';

import {
  colors,
  fonts,
  spacing,
  fontSizes,
  breakpoints
} from '../../utils/styles';

export const SectionHeading = styled(`h3`)`
  color: ${colors.lightest};
  font-family: ${fonts.heading};
  font-size: ${fontSizes.md};
  margin: 0;
`;

export const Heading = styled(`h2`)`
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: ${fontSizes.lg};
  line-height: 1.25;
  margin: 0;
  margin-top: ${spacing.sm}px;

  strong {
    color: ${colors.accent};
  }
`;

export const Subheading = styled(Heading)`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
`;

export const Text = styled(`p`)`
  color: ${colors.text};
  font-size: ${fontSizes.md};
  line-height: 1.5;
  margin-bottom: 0;

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: ${fontSizes.sm};
  }

  a {
    color: ${colors.brand};
    border-bottom: 1px solid ${colors.brand};
    font-weight: bold;
    text-decoration: none;

    :hover {
      color: ${colors.accent};
      border-bottom: 1px solid ${colors.accent};
    }
  }
`;

export const Lede = styled(Text)`
  font-size: ${fontSizes.md};
  font-weight: 700;
`;
