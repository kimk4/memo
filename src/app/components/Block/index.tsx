import styled from 'styled-components';

export default styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}>`
  margin-top: ${pros => pros.marginTop || '0'};
  margin-bottom: ${pros => pros.marginBottom || '0'};
  margin-left: ${pros => pros.marginLeft || '0'};
  margin-right: ${pros => pros.marginRight || '0'};
`;
