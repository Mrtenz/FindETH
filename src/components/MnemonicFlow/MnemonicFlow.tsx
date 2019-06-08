import React, { FunctionComponent } from 'react';
import EnterMnemonicPhrase from './EnterMnemonicPhrase';
import EnterPassword from './EnterPassword';
import LocalCheck from '../LocalCheck';
import Modal from '../ui/Modal';
import useFlow from '../ResultFlow';
import { FlowProps } from '../ResultFlow/ResultFlow';

interface Props {
  isVisible: boolean;
  onDone(result: MnemonicFlowResult): void;
  onClose(): void;
}

export interface MnemonicFlowResult {
  mnemonicPhrase: string;
  password: string;
}

interface InjectedProps {
  onClose(): void;
}

export type MnemonicFlowProps = FlowProps<MnemonicFlowResult> & InjectedProps;

const MnemonicFlow: FunctionComponent<Props> = ({ isVisible, onDone, onClose }) => {
  const [reset, Flow] = useFlow<MnemonicFlowResult, InjectedProps>();

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleDone = (results: Partial<MnemonicFlowResult>) => {
    onDone(results as Required<MnemonicFlowResult>);
  };

  return (
    <Modal isVisible={isVisible} buttons={null}>
      <LocalCheck>
        <Flow
          page={false}
          smallHeading={true}
          components={[
            {
              title: 'Enter your mnemonic phrase',
              Component: EnterMnemonicPhrase
            },
            {
              title: 'Enter your (optional) password',
              Component: EnterPassword
            }
          ]}
          injectedProps={{ onClose: handleClose }}
          onDone={handleDone}
        />
      </LocalCheck>
    </Modal>
  );
};

/*const mapDispatchToProps: MapDispatchToProps<DispatchProps, RouteComponentProps> = (
  dispatch,
  { history }
) => ({
  handleDone(): void {
    history.push('/search/address');
    dispatch(search(SearchType.Address));
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MnemonicFlow)
);*/

export default MnemonicFlow;
