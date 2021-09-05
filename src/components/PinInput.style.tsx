import styled from 'styled-components'

interface ColorProps {
  isCorrect?: boolean;
}

export const StyledPinInput = styled.input<ColorProps>`
  width: 35px;
  height: 35px;
  border: 2px solid;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  margin: 8px;
  border-color: ${props => {
    switch (props.isCorrect) {
      case true:
        return 'green'
      case false:
        return 'red'
      default: 
      return '#c3c3c3';
    }
  } }
`;



export const Message = styled.p<ColorProps>`
  color: ${props => props.isCorrect ? 'green' : 'red'}
`;

