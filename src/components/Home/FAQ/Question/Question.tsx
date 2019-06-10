import React, { FunctionComponent } from 'react';
import { QuestionContainer } from './StyledQuestion';
import Typography from '../../../ui/Typography';
import Heading from '../../../ui/Heading';

interface Props {
  question: string;
}

const Question: FunctionComponent<Props> = ({ question, children }) => (
  <QuestionContainer>
    <Heading as="h3">{question}</Heading>
    <Typography>{children}</Typography>
  </QuestionContainer>
);

export default Question;
