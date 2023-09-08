import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({
    direction = 'row',
    align = 'initial',
    justify = 'initial',
    gap,
    margin = 0,
    wrap = 'initial',
  }) => css`
    align-items: ${align};
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    gap: ${gap ?? 0}rem;
    justify-content: ${justify};
    margin: ${margin};
  `}
`;
