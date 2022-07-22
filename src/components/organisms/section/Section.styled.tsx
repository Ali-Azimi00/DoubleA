import styled from 'styled-components';

export const Section = styled.section`
  border: none;
  padding: 0 1rem;

  ${({ theme }) => theme.breakpoints.medium} {
    padding: 5rem 0;
  }
`;
